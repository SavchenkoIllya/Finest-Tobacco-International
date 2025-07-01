import { useCallback, useState } from "react";
import qs from "qs";
import { Global, Locale } from "@/app/types";
import { axiosClient, StrapiRoutes } from "@/app/lib";
import { HookOptionsProps } from "@/app/hooks/api/types";

const getGlobalQuery = (lang: Locale) =>
  qs.stringify(
    {
      populate: [
        "video",
        "Header",
        "Header.logo",
        "Header.Contacts",
        "Header.Contacts.icon",
      ],
      locale: lang,
    },
    { encodeValuesOnly: true },
  );

export const useGetGlobals = () => {
  const [data, setData] = useState<Global | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const query = useCallback((payload?: { lang?: Locale }) => {
    setIsPending(true);
    setIsSuccess(false);
    setError(null);

    axiosClient(
      `${StrapiRoutes.GET_GLOBALS}?${getGlobalQuery(payload?.lang ?? "en")}`,
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
