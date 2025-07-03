import { ProductImage, ProductValueWithTitle } from "@/app/ui";
import { Product } from "@/app/types";
import { useProductTranslationsStore } from "@/app/stores";
import { useShallow } from "zustand/shallow";

export const ProductPopoverContent = ({ product }: { product: Product }) => {
  const [getProductDescriptionField] = useProductTranslationsStore(
    useShallow((state) => [state.getProductDescriptionField]),
  );

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex justify-center lg:justify-start">
        <ProductImage
          image_url={product?.image?.url ?? undefined}
          title={product.title}
          width={550}
          height={250}
        />
      </div>

      <div className="flex flex-col gap-4 w-full">
        <div className="border-b-2 border-accent pb-2">
          <h4 className="text-4xl font-bold text-black">{product.title}</h4>
          <p className="text-lg">{product?.category?.name}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
          <ProductValueWithTitle
            text={product?.blend}
            title={getProductDescriptionField("property", "blend")?.title}
            icon={getProductDescriptionField("property", "blend")?.icon}
          />
          <ProductValueWithTitle
            text={product?.cigarette_length}
            title={
              getProductDescriptionField("property", "cigarette_length")?.title
            }
            icon={
              getProductDescriptionField("property", "cigarette_length")?.icon
            }
          />
          <ProductValueWithTitle
            text={product?.nicotine}
            title={getProductDescriptionField("property", "nicotine")?.title}
            icon={getProductDescriptionField("property", "nicotine")?.icon}
          />
          <ProductValueWithTitle
            text={product?.tar}
            title={getProductDescriptionField("property", "tar")?.title}
            icon={getProductDescriptionField("property", "tar")?.icon}
          />
          <ProductValueWithTitle
            text={product?.filter_parameters}
            title={
              getProductDescriptionField("property", "filter_parameters")?.title
            }
            icon={
              getProductDescriptionField("property", "filter_parameters")?.icon
            }
          />
        </div>
      </div>
    </div>
  );
};
