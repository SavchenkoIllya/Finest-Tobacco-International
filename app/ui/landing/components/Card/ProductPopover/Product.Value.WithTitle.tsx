import { ProductProperty, ProductPropertyProps } from "@/app/ui";

export interface ProductValueWithTitleProps {
  title: string;
  text: ProductPropertyProps["text"] | null;
  icon: ProductPropertyProps["icon"];
}

export const ProductValueWithTitle = ({
  title,
  text,
  icon,
}: ProductValueWithTitleProps) => {
  return (
    <div>
      <p className={"text-secondary text-xl font-bold"}>{title}</p>
      <ProductProperty text={text ?? undefined} icon={icon} />
    </div>
  );
};
