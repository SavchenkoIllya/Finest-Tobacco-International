import { useCallback, useState } from "react";
import { Brand, Locale } from "@/app/types";
import { axiosClient, StrapiRoutes } from "@/app/lib";
import qs from "qs";
import { useLanguageStore } from "@/app/stores";

const getBrandsQuery = (lang: Locale) =>
  qs.stringify(
    {
      populate: ["logo"],
      locale: lang,
    },
    { encodeValuesOnly: true },
  );

export const useGetBrands = () => {
  const currentLanguage = useLanguageStore((state) => state.current);

  const [data, setData] = useState<Brand[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const query = useCallback(() => {
    setIsPending(true);
    setIsSuccess(false);
    setError(null);

    axiosClient(
      `${StrapiRoutes.GET_BRANDS}?${getBrandsQuery(currentLanguage ?? "en")}`,
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
