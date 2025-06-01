import { db } from "@/app/db";
import {
  contactsTable,
  productsTable,
  productTranslationsTable,
  usersTable,
} from "@/app/db/schema";
import {
  products,
  productTranslations,
} from "@/app/db/scripts/mocked.Products";
import { User } from "@/app/db/types";
import { ERROR_MESSAGES, INFO_MESSAGES, SUCCESS_MESSAGES } from "@/app/lib";
import { s3Client, uploadToMinIO } from "@/app/lib/s3Client";
import { hashPassword } from "@/app/utils";
import {
  CreateBucketCommand,
  HeadBucketCommand,
  PutBucketPolicyCommand,
} from "@aws-sdk/client-s3";
import { sql } from "drizzle-orm";
import { mockedContacts } from "@/app/db/scripts/mocked.Contacts";

async function checkTablesExists() {
  try {
    const expectedTables = [
      "users",
      "products",
      "product_translations",
      "contacts",
      "features",
    ];
    const tables = await db.execute(
      sql`SELECT table_name FROM information_schema.tables 
      WHERE table_schema = 'public'`,
    );

    const existingTables = tables.rows.map((row) => row.table_name);

    return expectedTables.every((name) => existingTables.includes(name));
  } catch (e) {
    console.error(e);
    return false;
  }
}

async function createBucket() {}

// uploadToMinIO

async function ensureBucketExists(bucketName: string) {
  try {
    await s3Client.send(new HeadBucketCommand({ Bucket: bucketName }));
    console.log(INFO_MESSAGES.BUCKET_EXISTS);
  } catch (error) {
    console.error(error);
    console.log(`${bucketName}: ${INFO_MESSAGES.BUCKET_NOT_FOUNDED}`);

    await s3Client.send(
      new CreateBucketCommand({
        Bucket: bucketName,
      }),
    );

    const policy = {
      Statement: [
        {
          Effect: "Allow",
          Principal: "*",
          Action: ["s3:GetObject"],
          Resource: [`arn:aws:s3:::${bucketName}/*`],
        },
      ],
    };

    await s3Client.send(
      new PutBucketPolicyCommand({
        Bucket: bucketName,
        Policy: JSON.stringify(policy),
      }),
    );
  }
}

async function ensureAllBucketsExist(): Promise<boolean> {
  try {
    await Promise.all(
      [
        process.env.NEXT_PUBLIC_IMAGE_BUCKET_NAME!,
        process.env.NEXT_PUBLIC_VIDEO_BUCKET_NAME!,
      ].map((bucket) => ensureBucketExists(bucket)),
    );
    return true;
  } catch (error) {
    console.error(ERROR_MESSAGES.BUCKET_NOT_CREATED);
    console.error(error);

    return false;
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
    console.log(ERROR_MESSAGES.GENERAL_ERROR);
  }
}

async function createProductsAndTranslations() {
  await db.insert(productsTable).values(products);

  for (const translation of productTranslations) {
    await db.insert(productTranslationsTable).values(translation);
  }

  console.log(SUCCESS_MESSAGES.PRODUCTS_AND_TRANSLATIONS);
}

async function createContacts() {
  try {
    await db.insert(contactsTable).values(mockedContacts);
    console.log(SUCCESS_MESSAGES.GENERAL_SUCCESS);
  } catch (e) {
    console.error(e);
    console.error(ERROR_MESSAGES.GENERAL_ERROR);
  }
}

export async function main() {
  const tablesExists = await checkTablesExists();

  if (!tablesExists) {
    await createAdminUser();
    await createProductsAndTranslations();
    await createContacts();
  }

  const bucketExists = await ensureAllBucketsExist();

  if (!bucketExists) {
    console.log("CREATE AND UPLOAD");
  }
}

void main();
