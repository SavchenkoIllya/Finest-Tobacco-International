import { db } from "@/app/db";
import {
  contactsTable,
  messagesTable,
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
import { s3Client, uploadFile } from "@/app/lib/s3Client";
import { hashPassword } from "@/app/utils";
import {
  CreateBucketCommand,
  HeadBucketCommand,
  PutBucketPolicyCommand,
} from "@aws-sdk/client-s3";
import { sql } from "drizzle-orm";
import { mockedContacts } from "@/app/db/scripts/mocked.Contacts";
import { uploadBucketData } from "@/app/lib/uploadBucketData";
import { mockedMessage } from "@/app/db/scripts/mocked.Message";
import { resend } from "@/app/lib/resendClient";
import { IncomingMessage } from "@/app/emailTeamplates";
import { exec } from "child_process";
import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function checkTablesExists() {
  try {
    const expectedTables = [
      "users",
      "products",
      "product_translations",
      "contacts",
      "features",
      "messages",
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

async function createBucket(bucketName: string) {
  try {
    await s3Client.send(
      new CreateBucketCommand({
        Bucket: bucketName,
      }),
    );

    console.log(`${bucketName} ${SUCCESS_MESSAGES.BUCKET_CREATED}`);
  } catch (e) {
    console.error(e);
    console.error(ERROR_MESSAGES.BUCKET_NOT_CREATED);
  }

  const policy = {
    Version: "2012-10-17",
    Statement: [
      {
        Effect: "Allow",
        Principal: "*",
        Action: "s3:GetObject",
        Resource: `arn:aws:s3:::${bucketName}/*`,
      },
    ],
  };

  try {
    await s3Client.send(
      new PutBucketPolicyCommand({
        Bucket: bucketName,
        Policy: JSON.stringify(policy),
      }),
    );

    console.log(`${bucketName} ${SUCCESS_MESSAGES.BUCKET_POLICIES}`);
  } catch (e) {
    console.error(e);
    console.log(`${bucketName} ${ERROR_MESSAGES.BUCKET_POLICIES}`);
  }
}

async function ensureBucketExists(bucketName: string) {
  try {
    await s3Client.send(new HeadBucketCommand({ Bucket: bucketName }));
    console.log(INFO_MESSAGES.BUCKET_EXISTS);
  } catch (error) {
    console.error(error);
    console.log(`${bucketName}: ${INFO_MESSAGES.BUCKET_NOT_FOUNDED}`);
  }
}

async function ensureAllBucketsExist(): Promise<boolean> {
  try {
    await Promise.all(
      uploadBucketData.map((bucket) => ensureBucketExists(bucket.bucketName)),
    );

    return true;
  } catch (error) {
    console.error(error);

    return false;
  }
}

async function uploadBucketsData() {
  try {
    await Promise.all(
      uploadBucketData.map((bucket) =>
        uploadFile(bucket.bucketName, bucket.data.filePath),
      ),
    );

    console.log(SUCCESS_MESSAGES.FILE_UPLOADED);
  } catch (e) {
    console.error(e);
    console.log(ERROR_MESSAGES.FILE_UPLOADED);
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

async function createTestMessage() {
  try {
    await db.insert(messagesTable).values(mockedMessage);

    console.log(SUCCESS_MESSAGES.GENERAL_SUCCESS);

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "nfo@finest-tobacco.com",
      subject: "New message",
      react: IncomingMessage({ content: mockedMessage }),
    });
  } catch (e) {
    console.error(e);
    console.error(ERROR_MESSAGES.TEST_MESSAGE);
  }
}

export async function main() {
  const rl = createInterface({ input, output });

  const tablesExists = await checkTablesExists();

  if (!tablesExists) {
    const answer = await rl.question("Run 'npx drizzle-kit push'? (y/n): ");
    if (answer.toLowerCase() === "y") {
      console.log("Running...");
      await new Promise((resolve, reject) => {
        exec("npx drizzle-kit push", (error, stdout, stderr) => {
          if (error) return reject(error);
          if (stderr) console.error(`stderr: ${stderr}`);
          console.log(`Result:\n${stdout}`);
          resolve(null);
        });
      });
    } else {
      console.log("Canceled.");
    }
  }

  const seedAnswer = await rl.question("Seed db data? (y/n): ");
  if (seedAnswer.toLowerCase() === "y") {
    console.log("Seeding...");
    await createAdminUser();
    await createProductsAndTranslations();
    await createContacts();
    await createTestMessage();
  } else {
    console.log("Canceled.");
  }

  const bucketExists = await ensureAllBucketsExist();

  if (!bucketExists) {
    const bucketCreate = await rl.question("Create buckets? (y/n): ");
    if (bucketCreate.toLowerCase() === "y") {
      console.log("Creating buckets...");
      await Promise.all(
        uploadBucketData.map((bucket) => createBucket(bucket.bucketName)),
      );
    } else {
      console.log("Canceled.");
    }
  }

  const uploadAnswer = await rl.question("Upload bucket test data? (y/n): ");
  if (uploadAnswer.toLowerCase() === "y") {
    console.log("Uploading...");
    await uploadBucketsData();
  } else {
    console.log("Canceled.");
  }

  rl.close();
  console.log("CLI work finished");
}

void main();
