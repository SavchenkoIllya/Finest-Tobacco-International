import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import * as fs from "fs";
import * as path from "path";

export const s3Client = new S3Client({
  region: "us-east-1",
  endpoint: `${process.env.BASE_URL}:${process.env.NEXT_PUBLIC_MINIO_PORT}`,
  credentials: {
    accessKeyId: process.env.MINIO_USERNAME!,
    secretAccessKey: process.env.MINIO_PASSWORD!,
  },
  forcePathStyle: true,
});

export async function uploadFile(
  bucketName: string,
  filePath: string,
  key?: string,
  contentType?: string,
) {
  try {
    const fileContent = fs.readFileSync(filePath);
    const fileName = key || path.basename(filePath);

    // Автоматическое определение MIME типа по расширению
    const getContentType = (filePath: string): string => {
      const ext = path.extname(filePath).toLowerCase();
      const mimeTypes: { [key: string]: string } = {
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".png": "image/png",
        ".gif": "image/gif",
        ".pdf": "application/pdf",
        ".txt": "text/plain",
        ".json": "application/json",
        ".csv": "text/csv",
        ".mp4": "video/mp4",
        ".webm": "video/webm",
        ".mp3": "audio/mpeg",
        ".wav": "audio/wav",
      };
      return mimeTypes[ext] || "application/octet-stream";
    };

    await s3Client.send(
      new PutObjectCommand({
        Bucket: bucketName,
        Key: fileName,
        Body: fileContent,
        ContentType: contentType || getContentType(filePath),
        Metadata: {
          "uploaded-at": new Date().toISOString(),
        },
      }),
    );

    const fileUrl = `${process.env.BASE_URL}:${process.env.NEXT_PUBLIC_MINIO_PORT}/${bucketName}/${fileName}`;
    console.log(`File uploaded successfully: ${fileUrl}`);
    return fileUrl;
  } catch (error) {
    console.error(`Error uploading file ${filePath}:`, error);
    throw error;
  }
}
