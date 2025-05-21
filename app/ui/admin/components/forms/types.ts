import * as tables from "@/app/db/schema";

export type FormsDictionaryType = {
  [K in keyof typeof tables]?: string;
};
