"use client";
import { Input, Lookup, useUrlParams } from "@/app/ui";

export const Search = () => {
  const { setParamDebounced, getParam } = useUrlParams(500);
  const searchValue = getParam("query") ?? "";

  const handleSearch = (term: string) => {
    setParamDebounced("query", term);
  };

  return (
    <Input
      onChange={(e) => {
        handleSearch(e);
      }}
      variant={"black"}
      icon={<Lookup />}
      defaultValue={searchValue}
    />
  );
};
