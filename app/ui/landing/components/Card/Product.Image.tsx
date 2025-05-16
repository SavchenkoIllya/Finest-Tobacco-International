type ProductImageProps = {
  title?: string;
  image_url?: string;
  width?: number;
  height?: number;
};

export const ProductImage = ({
  title,
  image_url,
  width = 200,
  height = 250,
}: ProductImageProps) => (
  <img
    alt={title}
    src={`http://localhost:9000/${process.env.NEXT_PUBLIC_IMAGE_BUCKET_NAME!}/${image_url}`}
    width={width}
    height={height}
  />
);
