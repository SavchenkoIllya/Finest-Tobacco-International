"use server";
import { db } from "@/app/db";
import { productsTable, productTranslationsTable } from "@/app/db/schema";
import { eq, getTableName, sql } from "drizzle-orm";

export const getCategories = async () => {
  const categories = await db
    .select({
      category: sql`DISTINCT ${productsTable.category}`,
    })
    .from(productsTable);

  return categories.map((category) => category.category as string);
};

export const getBrands = async () => {
  const brands = await db
    .select({
      brand: sql`DISTINCT ${productsTable.brand}`,
    })
    .from(productsTable);

  return brands.map((brand) => brand.brand as string);
};

export const getBlends = async () => {
  const blends = await db
    .select({
      blend: sql`DISTINCT ${productTranslationsTable.blend}`,
    })
    .from(productTranslationsTable)
    .where(eq(productTranslationsTable.locale, "en"));

  return blends.map((blend) => blend.blend as string);
};

export const getProductFields = async () => {
  const fields = await db.execute(
    sql`SELECT column_name FROM information_schema.columns WHERE table_name = ${getTableName(productsTable)};`,
  );

  console.log(fields);
};
