import { ProductProperty } from "@/app/ui/landing/components/Card";
import { Media } from "@/app/types";

export interface ProductValueWithTitleProps {
  title?: string | null;
  text?: string | number;
  icon?: Media | null;
}

export const ProductValueWithTitle = ({
  title,
  text,
  icon,
}: ProductValueWithTitleProps) => {
  if (!text) return null;

  return (
    <div>
      {title && <p className={"text-xl font-bold text-primary"}>{title}</p>}
      <ProductProperty text={text ?? undefined} icon={icon} />
    </div>
  );
};
