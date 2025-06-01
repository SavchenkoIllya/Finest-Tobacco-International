import path from "path";

const bucketImageData = {
  bucketName: process.env.NEXT_PUBLIC_IMAGE_BUCKET_NAME!,
  data: {
    filePath: path.join(
      process.cwd(),
      "app/db/scripts/uploads",
      "bacio sunset.jpg",
    ),
  },
};

const bucketVideoData = {
  bucketName: process.env.NEXT_PUBLIC_VIDEO_BUCKET_NAME!,
  data: {
    filePath: path.join(
      process.cwd(),
      "app/db/scripts/uploads",
      "TabakGrishaVers2.mp4",
    ),
  },
};

export const uploadBucketData = [bucketImageData, bucketVideoData];
