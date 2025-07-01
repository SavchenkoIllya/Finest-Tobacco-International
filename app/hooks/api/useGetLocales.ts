import { axiosClient, StrapiRoutes } from "@/app/lib";
import { useCallback, useState } from "react";
import { Locale } from "@/app/types";

export const useGetLocales = () => {
  const [data, setData] = useState<Locale[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const query = useCallback(() => {
    setIsPending(true);
    setIsSuccess(false);
    setError(null);

    axiosClient(`${StrapiRoutes.GET_ALL_LOCALES}`, {
      method: "GET",
    })
      .then((res) => {
        setData(res.data.map((locale: any) => locale?.code));
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
  }, []);

  return {
    getLocales: query,
    locales: data,
    error,
    isPending,
    isSuccess,
    isError,
  };
};
