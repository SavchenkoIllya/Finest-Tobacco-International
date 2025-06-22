"use server";
import { fetchAPI } from "@/app/utils";
import { getStrapiURL } from "@/app/utils/getStrapiUrl";
import qs from "qs";

const getFeatureEnabledQuery = (featureName?: string) =>
  qs.stringify(
    {
      filters: {
        name: {
          $eq: featureName ?? "",
        },
      },
    },
    { encodeValuesOnly: true },
  );

export async function getFeatureEnabled(featureName?: string) {
  const path = "/api/feature-enableds";
  const strapiURL = getStrapiURL();
  const url = new URL(path, strapiURL);

  if (featureName) {
    url.search = getFeatureEnabledQuery(featureName);
  }
  return fetchAPI(url.href, {
    method: "GET",
  });
}
