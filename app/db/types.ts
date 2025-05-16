import * as tables from "./schema";

export type User = {
  select: typeof tables.usersTable.$inferSelect;
  insert: typeof tables.usersTable.$inferInsert;
};

export type Product = {
  select: typeof tables.productsTable.$inferSelect;
  insert: typeof tables.productsTable.$inferInsert;
};

export type ProductTranslation = {
  select: typeof tables.productTranslationsTable.$inferSelect;
  insert: typeof tables.productTranslationsTable.$inferInsert;
};

export type ProductsWithLocales = {
  select: Product["select"] & {
    locales?: ProductTranslation["select"][];
  };
};
