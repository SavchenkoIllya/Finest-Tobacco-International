import qs from "qs";
import { useLanguageStore } from "@/app/stores";
import { useCallback, useState } from "react";
import { Locale, Product } from "@/app/types";
import { axiosClient, StrapiRoutes } from "@/app/lib";

const getBrandsQuery = (lang: Locale) =>
  qs.stringify(
    {
      populate: ["image", "category", "brand", "format"],
      locale: lang,
    },
    { encodeValuesOnly: true },
  );

export const useGetProducts = () => {
  const currentLanguage = useLanguageStore((state) => state.current);

  const [data, setData] = useState<Product[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const query = useCallback(() => {
    setIsPending(true);
    setIsSuccess(false);
    setError(null);

    axiosClient(
      `${StrapiRoutes.GET_PRODUCTS}?${getBrandsQuery(currentLanguage ?? "en")}`,
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
