"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Locale } from "@/app/types";
import { LocalStorageNames } from "@/app/lib";

interface LanguageStore {
  availableLanguages: Locale[] | null;
  current: Locale;
  isLocalesLoaded: boolean;
  changeLocale: (locale: Locale) => void;
  setAvailableLanguages: (locales: Locale[]) => void;
}

export const fallbackLanguage: Locale = "en";

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      availableLanguages: null,
      current: fallbackLanguage,
      isLocalesLoaded: false,
      changeLocale: (locale: Locale) =>
        set(() => ({
          current: locale,
        })),
      setAvailableLanguages: (locales: Locale[]) =>
        set(() => ({
          availableLanguages: locales,
          isLocalesLoaded: true,
        })),
    }),
    {
      name: LocalStorageNames.LOCALES_STORE,
    },
  ),
);
