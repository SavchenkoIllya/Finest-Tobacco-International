"use client";
import { getProductWithLocalesById } from "@/app/actions";
import { ProductsWithLocales } from "@/app/db/types";
import { SearchParamsNames } from "@/app/lib";
import { cn, ProductImage, ProductProperty, useUrlParams } from "@/app/ui";
import { useEffect, useState } from "react";

type ProductPopoverProps = {
  open: boolean;
  onClose: () => void;
};

export const ProductPopover = ({ open, onClose }: ProductPopoverProps) => {
  const { getParam } = useUrlParams(0);
  const productId = getParam(SearchParamsNames.PRODUCT_ID) ?? "";
  const [product, setProduct] = useState<ProductsWithLocales["select"] | null>(
    null,
  );

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    const getProductByIdRequest = async () => {
      const productResponse = await getProductWithLocalesById(
        Number(productId),
      );
      setProduct(productResponse as any);
    };

    void getProductByIdRequest();
  }, [productId]);

  return (
    <div
      onClick={handleClose}
      className={cn(
        "fixed inset-0 w-full h-full z-100 bg-black-70 backdrop-blur-2xl transition-all duration-200",
        "flex justify-center items-center",
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
      )}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={cn(
          "w-full h-full flex flex-col md:flex-row justify-center items-center gap-8",
          "bg-primary/40",
          "w-fit h-fit p-20 rounded-4xl",
          "from-0% to-60%",
          "shadow-secondary/50 shadow-2xl",
        )}
      >
        <div>
          <ProductImage
            image_url={product?.image_url ?? undefined}
            title={product?.locales?.[0].title}
            width={400}
            height={400}
          />
        </div>
        <div>
          <div className={"border-b-2 border-accent"}>
            <h4 className={"h2 !text-black !text-xl !leading-6 truncate"}>
              {product?.locales?.[0].title}
            </h4>
            <p>{product?.category}</p>
          </div>
          <ProductProperty
            text={product?.locales?.[0].blend ?? undefined}
            icon={"leaf"}
          />
          <ProductProperty
            text={product?.nicotine ?? undefined}
            icon={"nicotine"}
          />
          <ProductProperty text={product?.tar ?? undefined} icon={"tar"} />
          <ProductProperty
            text={product?.cigarette_length ?? undefined}
            icon={"cigarette_length"}
          />
          <ProductProperty
            text={product?.tobacco_part_length ?? undefined}
            icon={"tobacco_length"}
          />
          <ProductProperty
            text={product?.filter_parameters ?? undefined}
            icon={"filter_length"}
          />
          <ProductProperty
            text={product?.filter_length ?? undefined}
            icon={"filter_length"}
          />
          <button
            className={"button bg-black text-white hover:bg-black!"}
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
