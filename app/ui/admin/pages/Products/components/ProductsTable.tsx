"use client";
import { ProductsWithLocales } from "@/app/db/types";
import { adminAppConfig, Table } from "@/app/ui/admin";

export const ProductsTable = ({
  data,
  count,
}: {
  data: ProductsWithLocales["select"][];
  count: number;
}) => {
  return (
    <Table
      data={data}
      columns={adminAppConfig.products.table}
      totalCount={count}
      pageSize={10}
      page={1}
      onPageChange={console.log}
      onPageSizeChange={console.log}
      onSortChange={(props) => {
        console.log(JSON.stringify(props));
      }}
      onSearchChange={console.log}
    />
  );
};
