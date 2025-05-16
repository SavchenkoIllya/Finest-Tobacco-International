import { db } from "@/app/db";
import { productsTable, productTranslationsTable } from "@/app/db/schema";
import { Product, ProductTranslation } from "@/app/db/types";
import { and, eq, SQL, sql } from "drizzle-orm";

const filters = {
  category: "Cigarettes",
  blend: "",
  filter: "",
  locale: "ru",
};

type Filters = typeof filters;

type ProductsWithTranslations = {
  product: Product["select"];
  translation: ProductTranslation["select"] | null;
};

const getFilters = (filters: Filters) => {
  const conditions = [];

  if (filters.category) {
    conditions.push(eq(productsTable.category, filters.category));
  }

  if (filters.blend) {
    conditions.push(eq(productTranslationsTable.blend, filters.blend));
  }

  if (filters.filter) {
    conditions.push(eq(productsTable.filter_parameters, filters.filter));
  }

  if (filters.locale) {
    conditions.push(eq(productTranslationsTable.locale, filters.locale));
  }

  return conditions;
};

const formatProductsWithLocales = (
  productsWithTranslations: ProductsWithTranslations[],
) => {
  if (!productsWithTranslations.length) return [];

  const productMap = new Map();

  productsWithTranslations.forEach((item) => {
    const productId = item.product.id;

    if (!productMap.has(productId)) {
      productMap.set(productId, {
        product: item.product,
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

export async function main() {
  const conditions = getFilters(filters);
  await getProductsWithTranslations(conditions);
}

void main();
