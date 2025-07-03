import { Media } from "@/app/types";

type ProductPropertyProps = {
  text?: string | number;
  icon?: Media | null;
};

export const ProductProperty = ({ text, icon }: ProductPropertyProps) => {
  const iconUrl =
    process.env.NODE_ENV === "development"
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${icon?.url}`
      : icon?.url;

  return (
    <div className={"flex gap-2"}>
      {iconUrl && <img src={iconUrl} alt={icon?.name} />}
      <p className={"text-primary"}>{text}</p>
    </div>
  );
};
