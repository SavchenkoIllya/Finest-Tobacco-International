import { useCallback, useState } from "react";
import qs from "qs";
import { Locale, ProductCard } from "@/app/types";
import { axiosClient, StrapiRoutes } from "@/app/lib";
import { useLanguageStore } from "@/app/stores";

const getProductTranslation = (lang: Locale) =>
  qs.stringify(
    {
      populate: ["description_fields", "description_fields.icon"],
      locale: lang,
    },
    { encodeValuesOnly: true },
  );

export const useGetProductTranslation = () => {
  const currentLanguage = useLanguageStore((state) => state.current);

  const [data, setData] = useState<ProductCard | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const query = useCallback(() => {
    setIsPending(true);
    setIsSuccess(false);
    setError(null);

    axiosClient(
      `${StrapiRoutes.GET_PRODUCT_CARDS}?${getProductTranslation(currentLanguage ?? "en")}`,
      {
        method: "GET",
      },
    )
      .then((res) => {
        setData(res.data.data);
        setIsSuccess(true);
      })
      .catch((err) => {
        setError(err);
        setIsSuccess(false);
        setIsError(true);
      })
      .finally(() => {
        setIsPending(false);
      });
  }, [currentLanguage]);

  return {
    query,
    data,
    error,
    isPending,
    isSuccess,
    isError,
  };
};
