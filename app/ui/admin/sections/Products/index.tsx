"use server";
import { getFilteredProductsWithTranslations } from "@/app/actions";
import { ProductsTable } from "@/app/ui/admin/sections/Products/components";
import { TableActionAddButton } from "@/app/ui/admin/sections/Products/components/TableAction.Add.Button";

export async function AdminProducts() {
  const products = await getFilteredProductsWithTranslations();

  return (
    <div className={"flex flex-col gap-4"}>
      <TableActionAddButton />
      <ProductsTable data={products} />
    </div>
  );
}
