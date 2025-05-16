import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

export const s3Client = new S3Client({
  region: "us-east-1",
  endpoint: "http://localhost:9005",
  credentials: {
    accessKeyId: "minioadmin",
    secretAccessKey: "minioadmin",
  },
  forcePathStyle: true,
});

export async function uploadToMinIO(file: File, filename: string) {
  const buffer = Buffer.from(await file.arrayBuffer());

  const command = new PutObjectCommand({
    Bucket: "images",
    Key: filename,
    Body: buffer,
    ContentType: file.type,
  });

  await s3Client.send(command);

  return `http://localhost:9000/images/${filename}`;
}
