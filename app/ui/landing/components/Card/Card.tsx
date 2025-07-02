"use client";
import { ProductImage, ProductPopover, ProductProperty } from "@/app/ui";
import { Product } from "@/app/types";

export const ProductCard = ({
  product,
  open = false,
  onClose,
  onClick,
}: {
  product: Product;
  onClick: () => void;
  open?: boolean;
  onClose: () => void;
}) => {
  return (
    <>
      <ProductPopover open={open} onClose={onClose} />
      <button
        className={
          "text-left flex flex-col cursor-pointer hover:bg-zinc-50 p-4 rounded-2xl transition-all w-60"
        }
        onClick={onClick}
        type={"button"}
      >
        <div className={"border-b-2 border-accent"}>
          <div className={"flex justify-center items-center p-4"}>
            <ProductImage
              image_url={product?.image?.url ?? undefined}
              title={product?.title}
            />
          </div>
          <h4 className={"h2 !text-black !text-xl !leading-6 truncate"}>
            {product?.title}
          </h4>
          <p>{product.category?.name}</p>
        </div>
        <div className={"mt-4"}>
          <ProductProperty text={product?.blend ?? undefined} icon={"leaf"} />
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
