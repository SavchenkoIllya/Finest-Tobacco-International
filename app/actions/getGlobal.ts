import qs from "qs";

export const globalQuery = qs.stringify(
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
