"use client";
import { ProductsWithLocales } from "@/app/db/types";
import { ColumnDef } from "@/app/ui/admin";
import { ImageProduct, LinkProduct } from "@/app/ui/admin/components/fields";

// TODO: fix types of ColDef

export const productTableConfig: ColumnDef<ProductsWithLocales["select"]>[] = [
  {
    key: "id",
    label: "ID",
    sortable: true,
    render: (value) => <LinkProduct id={value} />,
  },
  {
    key: "brand",
    label: "Brand",
    sortable: true,
  },
  {
    key: "category",
    label: "Category",
    sortable: true,
  },
  {
    key: "filter_parameters",
    label: "Filter Parameters",
    sortable: true,
  },
  {
    key: "nicotine",
    label: "Nicotine",
    sortable: true,
  },
  {
    key: "image_url",
    label: "Image",
    sortable: true,
    render: (value) => <ImageProduct image_url={value} />,
  },
];
