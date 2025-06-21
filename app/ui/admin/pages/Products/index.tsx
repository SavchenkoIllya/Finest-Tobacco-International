"use server";
import {
  getFilteredProductsWithTranslations,
  getProductsCount,
} from "@/app/actions";
import { ProductsTable } from "@/app/ui/admin/pages/Products/components";
import { TableActionAddButton } from "@/app/ui/admin/pages/Products/components/TableAction.Add.Button";

export async function AdminProducts() {
  const products = await getFilteredProductsWithTranslations();
  const productsCount = (await getProductsCount()) ?? 0;

  return (
    <div className={"flex flex-col gap-4"}>
      <TableActionAddButton />
      <ProductsTable data={products} count={productsCount} />
    </div>
  );
}
