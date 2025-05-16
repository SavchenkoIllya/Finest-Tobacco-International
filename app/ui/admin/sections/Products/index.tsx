"use server";
import { getFilteredProductsWithTranslations } from "@/app/actions";
import { ProductsTable } from "@/app/ui/admin/sections/Products/components";

export async function AdminProducts() {
  const products = await getFilteredProductsWithTranslations();

  return <ProductsTable data={products} />;
}
