import { cn } from "@/app/ui";

type ProductImageProps = {
  title?: string;
  image_url?: string;
  width?: number;
  height?: number;
  variant?: "md" | "lg";
};

export const ProductImage = ({
  title,
  image_url,
  variant = "md",
  width = 200,
  height = 250,
}: ProductImageProps) => (
  <img
    alt={title}
    src={
      process.env.NODE_ENV === "development"
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${image_url}`
        : image_url
    }
    width={width}
    height={height}
    className={cn(
      "object-contain",
      variant === "md" ? "h-[250px]" : "w-[500px] h-[500px]",
    )}
  />
);
