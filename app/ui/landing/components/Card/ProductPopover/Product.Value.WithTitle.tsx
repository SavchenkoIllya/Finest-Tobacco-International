import {
  ProductProperty,
  PropertyValidIcons,
} from "@/app/ui/landing/components/Card";

export interface ProductValueWithTitleProps {
  title: string;
  text?: string | number;
  icon: PropertyValidIcons;
}

export const ProductValueWithTitle = ({
  title,
  text,
  icon,
}: ProductValueWithTitleProps) => {
  if (!text) return null;

  return (
    <div>
      <p className={"text-xl font-bold"}>{title}</p>
      <ProductProperty text={text ?? undefined} icon={icon} />
    </div>
  );
};
