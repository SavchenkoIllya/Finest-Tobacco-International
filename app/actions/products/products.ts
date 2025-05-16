"use server";
import { db } from "@/app/db";
import { productsTable, productTranslationsTable } from "@/app/db/schema";
import {
  Product,
  ProductsWithLocales,
  ProductTranslation,
} from "@/app/db/types";
import { and, count, eq, ilike, or, sql, SQL } from "drizzle-orm";

// FIXME error types

export type ProductFilters = Partial<{
  category: string;
  blend: string;
  brand: string;
  query: string;
  locale: string;
}>;

type ProductsWithTranslations = {
  product: Product["select"];
  translation: ProductTranslation["select"] | null;
};

const formatFilterQuery = (filters?: ProductFilters) => {
  const conditions: SQL<unknown>[] = [];

  if (!filters) return conditions;

  if (filters.category) {
    conditions.push(ilike(productsTable.category, filters.category));
  }

  if (filters.blend) {
    conditions.push(ilike(productTranslationsTable.blend, filters.blend));
  }

  if (filters.brand) {
    conditions.push(ilike(productsTable.brand, filters.brand));
  }

  if (filters.locale) {
    conditions.push(ilike(productTranslationsTable.locale, filters.locale));
  }

  if (filters.query) {
    const queryPattern = `%${filters.query}%`;

    conditions.push(
      or(
        ilike(productTranslationsTable.title, queryPattern),
        ilike(productTranslationsTable.subtitle, queryPattern),
        // Add more fields here if needed
      ) as SQL<unknown>,
    );
  }

  return conditions;
};

const formatProductsWithLocales = (
  productsWithTranslations: ProductsWithTranslations[],
): ProductsWithLocales["select"][] => {
  if (!productsWithTranslations.length) return [];

  const productMap = new Map();

  productsWithTranslations.forEach((item) => {
    const productId = item.product.id;

    if (!productMap.has(productId)) {
      productMap.set(productId, {
        ...item.product,
        locales: [],
      });
    }

    if (item.translation) {
      productMap.get(productId).locales.push(item.translation);
    }
  });

  return Array.from(productMap.values());
};

const getProductsWithTranslations = async (conditions: SQL<unknown>[]) => {
  const result: ProductsWithTranslations[] | null = await db
    .select({
      product: productsTable,
      translation: productTranslationsTable,
    })
    .from(productsTable)
    .leftJoin(
      productTranslationsTable,
      eq(productsTable.id, productTranslationsTable.product_id),
    )
    .where(conditions.length === 0 ? sql.raw("1=1") : and(...conditions));

  if (!result) return [];

  return formatProductsWithLocales(result);
};

export async function getFilteredProductsWithTranslations(
  filters?: ProductFilters,
) {
  const conditions = formatFilterQuery(filters) ?? null;
  const response = await getProductsWithTranslations(conditions);

  return response;
}

export async function getProductById(id: number) {
  const result: ProductsWithTranslations[] | null = await db
    .select({
      product: productsTable,
      translation: productTranslationsTable,
    })
    .from(productsTable)
    .leftJoin(
      productTranslationsTable,
      eq(productsTable.id, productTranslationsTable.product_id),
    )
    .where(eq(productsTable.id, id));

  // TODO: error message
  if (!result) return [];

  return formatProductsWithLocales(result)[0];
}

export async function getProductsCount() {
  const result = await db.select({ count: count() }).from(productsTable);

  // TODO: error message
  if (!result) return;

  return result[0].count;
}
