"use client";
import { ProductsWithLocales } from "@/app/db/types";
import { SearchParamsNames } from "@/app/lib";
import {
  ProductImage,
  ProductPopover,
  ProductProperty,
  useUrlParams,
} from "@/app/ui";

export const ProductCard = ({
  product,
}: {
  product: ProductsWithLocales["select"];
}) => {
  const translation = product.locales?.length ? product.locales[0] : undefined;

  const { setMultipleParams, getParam } = useUrlParams(0);
  const open = !!getParam(SearchParamsNames.MODAL) || false;

  const handleOpen = () => {
    setMultipleParams({
      [SearchParamsNames.MODAL]: "true",
      [SearchParamsNames.PRODUCT_ID]: String(product.id),
    });
  };

  const handleClose = () => {
    setMultipleParams({
      [SearchParamsNames.MODAL]: "",
      [SearchParamsNames.PRODUCT_ID]: "",
    });
  };

  return (
    <>
      <ProductPopover open={open} onClose={handleClose} />
      <button
        className={
          "text-left flex flex-col cursor-pointer hover:bg-zinc-50 p-4 rounded-2xl transition-all w-60"
        }
        onClick={handleOpen}
        type={"button"}
      >
        <div className={"border-b-2 border-accent"}>
          <div className={"flex justify-center items-center p-4"}>
            <ProductImage
              image_url={product.image_url ?? undefined}
              title={translation?.title}
            />
          </div>
          <h4 className={"h2 !text-black !text-xl !leading-6 truncate"}>
            {translation?.title}
          </h4>
          <p>{product.category}</p>
        </div>
        <div className={"mt-4"}>
          <ProductProperty
            text={translation?.blend ?? undefined}
            icon={"leaf"}
          />
          <ProductProperty
            text={product.nicotine ?? undefined}
            icon={"nicotine"}
          />
          <ProductProperty text={product.tar ?? undefined} icon={"tar"} />
        </div>
      </button>
    </>
  );
};
