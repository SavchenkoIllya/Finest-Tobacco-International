import { useCallback, useState } from "react";
import qs from "qs";
import { Global, Locale } from "@/app/types";
import { axiosClient, StrapiRoutes } from "@/app/lib";
import { useLanguageStore } from "@/app/stores";

const getGlobalQuery = (lang: Locale) =>
  qs.stringify(
    {
      populate: [
        "video",
        "age_modal",
        "about_content",
        "about_content.pillars",
        "brands_section",
        "brands_section.brands",
        "brands_section.brands.logo",
        "additional_about_section",
        "scroll_labels",
        "contacts_section",
        "contacts_section.form_inputs",
        "map_location",
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
  const currentLanguage = useLanguageStore((state) => state.current);

  const [data, setData] = useState<Global | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const query = useCallback(() => {
    setIsPending(true);
    setIsSuccess(false);
    setError(null);

    axiosClient(
      `${StrapiRoutes.GET_GLOBALS}?${getGlobalQuery(currentLanguage ?? "en")}`,
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
