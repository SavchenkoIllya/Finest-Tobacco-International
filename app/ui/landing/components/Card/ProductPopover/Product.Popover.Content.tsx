import { ProductsWithLocales } from "@/app/db/types";
import { ProductImage, ProductValueWithTitle } from "@/app/ui";

export const ProductPopoverContent = ({
  product,
}: {
  product: ProductsWithLocales["select"];
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex justify-center lg:justify-start">
        <ProductImage
          image_url={product?.image_url ?? undefined}
          title={product?.locales?.[0].title}
          width={550}
          height={250}
        />
      </div>

      <div className="flex flex-col gap-4 w-full">
        <div className="border-b-2 border-accent pb-2">
          <h4 className="text-2xl font-bold text-black">
            {product?.locales?.[0].title}
          </h4>
          <p className="text-lg text-secondary">{product?.category}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
          <ProductValueWithTitle
            title="Tobacco blend"
            text={product?.locales?.[0].blend}
            icon="leaf"
          />
          <ProductValueWithTitle
            title="Diameter"
            text={product?.diameter}
            icon="diameter"
          />
          <ProductValueWithTitle
            title="Cigarette length"
            text={product?.cigarette_length}
            icon="cigarette_length"
          />
          <ProductValueWithTitle
            title="Nicotine"
            text={product?.nicotine}
            icon="nicotine"
          />
          <ProductValueWithTitle
            title="Tobacco part length"
            text={product?.tobacco_part_length}
            icon="tobacco_length"
          />
          <ProductValueWithTitle title="Tar" text={product?.tar} icon="tar" />
          <ProductValueWithTitle
            title="Filter length"
            text={product?.filter_length}
            icon="filter_length"
          />
          <ProductValueWithTitle
            title="Filter Parameters"
            text={product?.filter_parameters}
            icon="filter_length"
          />
        </div>
      </div>
    </div>
  );
};
