import { MenuFilterKeys, SearchParamsNames } from "@/app/lib";

export type HomePageSearchParams = Partial<
  Record<SearchParamsNames | MenuFilterKeys, string | undefined>
>;
