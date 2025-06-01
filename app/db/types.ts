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

export type Features = {
  select: typeof tables.featuresTable.$inferSelect;
  insert: typeof tables.featuresTable.$inferInsert;
};

export type Contacts = {
  select: typeof tables.contactsTable.$inferSelect;
  insert: typeof tables.contactsTable.$inferInsert;
};

export type ProductsWithLocales = {
  select: Product["select"] & {
    locales?: ProductTranslation["select"][];
  };
};

export type Messages = {
  select: typeof tables.messagesTable.$inferSelect;
  insert: typeof tables.messagesTable.$inferInsert;
};
