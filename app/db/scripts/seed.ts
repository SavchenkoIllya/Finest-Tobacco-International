import { db } from "@/app/db";
import {
  productsTable,
  productTranslationsTable,
  usersTable,
} from "@/app/db/schema";
import {
  products,
  productTranslations,
} from "@/app/db/scripts/mocked.Products";
import { User } from "@/app/db/types";
import { SUCCESS_MESSAGES } from "@/app/lib";
import { s3Client } from "@/app/lib/s3Client";
import { hashPassword } from "@/app/utils";
import { CreateBucketCommand, HeadBucketCommand } from "@aws-sdk/client-s3";
import { sql } from "drizzle-orm";

async function checkTablesExists() {
  const tables = await db.execute(
    sql`SELECT table_name FROM information_schema.tables 
      WHERE table_schema = 'public'`,
  );

  console.log(tables.rows)
}

async function ensureBucketExists(bucketName: string) {
  try {
    await s3Client.send(new HeadBucketCommand({ Bucket: bucketName }));
    console.log(`Bucket "${bucketName}" уже существует.`);
  } catch (error) {
    console.error(error);
    console.log(`Bucket "${bucketName}" не найден, создаю...`);
    await s3Client.send(
      new CreateBucketCommand({
        Bucket: bucketName,
      }),
    );
  }
}

async function createAdminUser() {
  const adminUser: User["insert"] = {
    name: "Administrator",
    email: process.env.ADMIN_EMAIL!,
    password: await hashPassword(process.env.ADMIN_PASSWORD!),
  };

  try {
    await db.insert(usersTable).values(adminUser);
    console.log(SUCCESS_MESSAGES.GENERAL_SUCCESS);
  } catch (error) {
    console.error(error);
  }
}

async function createProductsAndTranslations() {
  await db.insert(productsTable).values(products);

  for (const translation of productTranslations) {
    await db.insert(productTranslationsTable).values(translation);
  }

  console.log("Products and translations added successfully!");
}

export async function main() {
  await checkTablesExists();
  await createAdminUser();
  await createProductsAndTranslations();
  await ensureBucketExists(process.env.NEXT_PUBLIC_IMAGE_BUCKET_NAME!);
}

void main();
