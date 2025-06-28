import qs from "qs";

export const getFeatureEnabledQuery = (featureName?: string) =>
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
