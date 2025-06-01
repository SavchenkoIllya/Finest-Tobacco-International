import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

export const s3Client = new S3Client({
  region: "us-east-1",
  endpoint: `${process.env.BASE_URL}:${process.env.NEXT_PUBLIC_MINIO_PORT}`,
  credentials: {
    accessKeyId: process.env.MINIO_USERNAME!,
    secretAccessKey: process.env.MINIO_PASSWORD!,
  },
  forcePathStyle: true,
});

export async function uploadToMinIO(
  file: File,
  filename: string,
  bucket: string,
) {
  const buffer = Buffer.from(await file.arrayBuffer());

  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: filename,
    Body: buffer,
    ContentType: file.type,
  });

  await s3Client.send(command);
}
