"use client";
import { Input, Lookup } from "@/app/ui";
import { useCatalogueStore } from "@/app/stores";
import { useShallow } from "zustand/shallow";

export const Search = () => {
  const [filters, setFilters] = useCatalogueStore(
    useShallow((state) => [state.filters, state.setFilters]),
  );

  const handleSearch = (term: string) => {
    setFilters({ ...filters, query: term });
  };

  return (
    <Input
      onChange={(e) => {
        handleSearch(e);
      }}
      variant={"black"}
      icon={<Lookup />}
      value={filters.query}
    />
  );
};
