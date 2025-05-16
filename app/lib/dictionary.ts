import { Locale } from "@/app/lib/i18nConfig";
import "server-only";

const dictionaries = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  ru: () => import("../dictionaries/ru.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return locale in dictionaries
    ? dictionaries[locale as keyof typeof dictionaries]()
    : dictionaries.en();
};
