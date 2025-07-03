"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductCard, SharedDescriptionField } from "@/app/types";
import { LocalStorageNames } from "@/app/lib";

interface ProductTranslationsStore {
  productsTranslations: ProductCard | null;
  getProductDescriptionField: (
    field: keyof SharedDescriptionField,
    value: number | string,
  ) => SharedDescriptionField | null;
  setProductsTranslations: (translations: ProductCard) => void;
}

export const useProductTranslationsStore = create<ProductTranslationsStore>()(
  persist(
    (set, getState) => ({
      productsTranslations: null,
      getProductDescriptionField: (field, value) => {
        const { productsTranslations } = getState();

        if (!productsTranslations?.description_fields) return null;

        return (
          productsTranslations.description_fields.find(
            (descField) => descField[field] === value,
          ) || null
        );
      },
      setProductsTranslations: (translations) =>
        set(() => ({
          productsTranslations: translations,
        })),
    }),
    {
      name: LocalStorageNames.PRODUCTS_LOCALES_STORE,
    },
  ),
);
