"use client";
import { useEffect } from "react";
import { useLanguageStore } from "@/app/stores";
import { useGetLocales } from "@/app/hooks";

export const LocalesInitializer = () => {
  const { isLocalesLoaded, setAvailableLanguages } = useLanguageStore();
  const { getLocales, locales, isSuccess } = useGetLocales();

  useEffect(() => {
    if (!isLocalesLoaded) {
      getLocales();
    }
  }, [isLocalesLoaded, getLocales]);

  useEffect(() => {
    if (isSuccess && locales.length > 0) {
      setAvailableLanguages(locales);
    }
  }, [isSuccess, locales, setAvailableLanguages]);

  return null;
};
