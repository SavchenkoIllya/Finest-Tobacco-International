"use server";
import { fetchAPI } from "@/app/utils";
import { getStrapiURL } from "@/app/utils/getStrapiUrl";
import qs from "qs";

const globalQuery = qs.stringify(
  {
    populate: [
      "video",
      "Header",
      "Header.logo",
      "Header.Contacts",
      "Header.Contacts.icon",
    ],
  },
  { encodeValuesOnly: true },
);

export async function getGlobal() {
  const path = "/api/global";
  const strapiURL = getStrapiURL();
  const url = new URL(path, strapiURL);
  url.search = globalQuery;

  return fetchAPI(url.href, {
    method: "GET",
  });
}
