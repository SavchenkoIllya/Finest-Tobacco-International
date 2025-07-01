import { axiosClient, StrapiRoutes } from "@/app/lib";
import { useCallback, useState } from "react";
import { Subscriber } from "@/app/types";

export const useGetSubscribers = () => {
  const [data, setData] = useState<Subscriber[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const query = useCallback(() => {
    setIsPending(true);
    setIsSuccess(false);
    setError(null);

    axiosClient(`${StrapiRoutes.GET_SUBSCRIBERS}`, {
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
