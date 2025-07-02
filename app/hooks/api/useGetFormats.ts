import qs from "qs";
import { useCallback, useState } from "react";
import { Format } from "@/app/types";
import { axiosClient, StrapiRoutes } from "@/app/lib";

const getFormatsQuery = () => qs.stringify({ encodeValuesOnly: true });

export const useGetFormats = () => {
  const [data, setData] = useState<Format[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const query = useCallback(() => {
    setIsPending(true);
    setIsSuccess(false);
    setError(null);

    axiosClient(`${StrapiRoutes.GET_FORMATS}?${getFormatsQuery()}`, {
      method: "GET",
    })
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
  }, []);

  return {
    query,
    data,
    error,
    isPending,
    isSuccess,
    isError,
  };
};
