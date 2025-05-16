"use client";
import { MenuFilterKeys, SearchParamsNames } from "@/app/lib";
import { FilterLabel, useUrlParams } from "@/app/ui";

export const FilterLabelContainer = () => {
  const { getAllParams } = useUrlParams(0);
  const params = getAllParams();

  return (
    <div className={"w-full flex flex-wrap gap-2"}>
      {[
        SearchParamsNames.QUERY,
        MenuFilterKeys.BRANDS,
        MenuFilterKeys.CATEGORIES,
        MenuFilterKeys.FILTER_PARAMS,
      ].map(
        (filter) =>
          params[filter] && (
            <FilterLabel key={filter} title={filter} value={params[filter]} />
          ),
      )}
    </div>
  );
};
