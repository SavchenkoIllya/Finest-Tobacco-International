export type PropertyValidIcons =
  | "cigarette_length"
  | "diameter"
  | "filter_length"
  | "leaf"
  | "nicotine"
  | "tar"
  | "tobacco_length";

type ProductPropertyProps = {
  text?: string | number;
  icon: PropertyValidIcons;
};

export const ProductProperty = ({ text, icon }: ProductPropertyProps) => {
  return (
    <div className={"flex gap-2"}>
      <img src={`/icons/products/${icon}.svg`} alt={`${icon} icon`} />
      <p>{text}</p>
    </div>
  );
};
