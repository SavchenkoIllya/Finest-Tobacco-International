"use client";
import { Product } from "@/app/db/types";
import { OverviewItem } from "@/app/ui/admin";

export const productOverviewConfig: OverviewItem<Product["select"]>[] = [
  { key: "id", title: "ID", type: "string" },
  { key: "brand", title: "Brand", type: "string" },
  { key: "active", title: "Active", type: "boolean" },
];
