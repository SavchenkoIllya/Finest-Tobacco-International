"use client";
import { create } from "zustand";
import { Brand, Format, Product } from "@/app/types";

export interface CatalogueFilters {
  query: string;
  brand: Brand | null;
  format: Format | null;
}

export interface CatalogueMenuItems {
  brands: Brand[] | null;
  formats: Format[] | null;
}

interface CatalogueStore {
  products: Product[] | null;
  setProducts: (products: Product[] | null) => void;

  filters: CatalogueFilters;
  setFilters: (filters: CatalogueFilters) => void;

  catalogueMenuItems: CatalogueMenuItems;
  setCatalogueMenuItems: (catalogueMenuItems: CatalogueMenuItems) => void;

  activeProduct: Product | null;
  setActiveProduct: (product: Product | null) => void;
}

export const useCatalogueStore = create<CatalogueStore>((set) => ({
  products: null,
  setProducts: (products) => set({ products }),

  filters: {
    query: "",
    brand: null,
    format: null,
  },
  setFilters: (filters) => set({ filters }),

  catalogueMenuItems: {
    brands: null,
    formats: null,
  },
  setCatalogueMenuItems: (catalogueMenuItems) => set({ catalogueMenuItems }),

  activeProduct: null,
  setActiveProduct: (product) => set({ activeProduct: product }),
}));
