"use client";
import { FilterLabel } from "@/app/ui";
import { CatalogueFilters, useCatalogueStore } from "@/app/stores";
import { useShallow } from "zustand/shallow";

export const FilterLabelContainer = () => {
  const [filters, setFilters] = useCatalogueStore(
    useShallow((state) => [state.filters, state.setFilters]),
  );
  return (
    <div className={"w-full flex flex-wrap gap-2"}>
      {Object.keys(filters).map((filterKey) => {
        switch (true) {
          case filterKey === "brand":
            return (
              <FilterLabel
                key={filterKey}
                title={filterKey}
                value={filters.brand?.name}
                onRemove={() => {
                  setFilters({ ...filters, brand: null });
                }}
              />
            );

          case filterKey === "query":
            return (
              <FilterLabel
                key={filterKey}
                title={filterKey}
                value={filters.query}
                onRemove={() => {
                  setFilters({ ...filters, query: "" });
                }}
              />
            );

          case filterKey === "format":
            return (
              <FilterLabel
                key={filterKey}
                title={filterKey}
                value={filters.format?.name}
                onRemove={() => {
                  setFilters({ ...filters, format: null });
                }}
              />
            );
        }
      })}
    </div>
  );
};
