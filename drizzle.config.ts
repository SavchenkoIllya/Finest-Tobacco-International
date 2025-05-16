import "dotenv/config";
import { defineConfig } from "drizzle-kit";

console.log("DB URL:", process.env.DATABASE_URL);

export default defineConfig({
  out: "./app/db/drizzle",
  schema: "./app/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
