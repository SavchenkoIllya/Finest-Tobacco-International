import { integer, pgTable, text, varchar, boolean } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
});

export const productsTable = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  category: varchar({ length: 255 }).notNull(),
  cigarette_length: varchar({ length: 255 }),
  brand: varchar({ length: 255 }).notNull(),
  tobacco_part_length: varchar({ length: 255 }),
  filter_length: varchar({ length: 255 }),
  diameter: varchar({ length: 255 }),
  nicotine: varchar({ length: 255 }),
  tar: varchar({ length: 255 }),
  filter_parameters: varchar({ length: 255 }),
  image_url: text(),
});

export const productTranslationsTable = pgTable("product_translations", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  product_id: integer()
    .references(() => productsTable.id, { onDelete: "cascade" })
    .notNull(),
  locale: varchar({ length: 2 }).notNull(),
  title: varchar({ length: 255 }).notNull(),
  subtitle: varchar({ length: 255 }).notNull(),
  description: text(),
  blend: varchar({ length: 255 }),
});

export const featuresTable = pgTable("features", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  active: boolean().default(false),
});
