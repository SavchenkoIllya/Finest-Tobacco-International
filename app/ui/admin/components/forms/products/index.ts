import { Product, ProductTranslation } from "@/app/db/types";
import { ReactNode } from "react";

export const productsFormFields: { [K in keyof Product["select"]]: ReactNode } =
  {
    id: 1,
    category: "",
    cigarette_length: "",
    brand: "",
    tobacco_part_length: "",
    filter_length: "",
    diameter: "",
    nicotine: "",
    tar: "",
    filter_parameters: "",
    image_url: "",
    active: true,
  };

export const productsFormDefaultFields: Product["insert"] = {
  category: "",
  cigarette_length: "",
  brand: "",
  tobacco_part_length: "",
  filter_length: "",
  diameter: "",
  nicotine: "",
  tar: "",
  filter_parameters: "",
  image_url: "",
  active: true,
};

export const localFormFields: {
  [K in keyof ProductTranslation["select"]]: ReactNode;
} = {
  id: 1,
  product_id: "",
  locale: "",
  title: "",
  subtitle: "",
  description: "",
  blend: "",
};

export const localFormDefaultFields: {
  [K in keyof ProductTranslation["select"]]:
    | ProductTranslation["select"][K]
    | null;
} = {
  id: 1,
  product_id: null,
  locale: "",
  title: "",
  subtitle: "",
  description: "",
  blend: "",
};

export const productWithTranslationsFormDefaultFields = {
  product: productsFormDefaultFields,
  locales: localFormDefaultFields,
};
