"use client";
import { getProductById } from "@/app/actions";
import { ProductsWithLocales } from "@/app/db/types";
import { SearchParamsNames } from "@/app/lib";
import { Modal, ProductPopoverContent, useUrlParams } from "@/app/ui";
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
      const productResponse = await getProductById(Number(productId));
      setProduct(productResponse);
    };

    void getProductByIdRequest();
  }, [productId]);

  if (!product) return null;

  return (
    <Modal open={open} onClose={handleClose}>
      <div className={"flex items-center md:items-end flex-col gap-8 m-20"}>
        <ProductPopoverContent product={product} />

        <div
          className={"max-md:fixed max-md:bottom-0 max-md:p-8 max-md:w-full"}
        >
          <button
            className={"button bg-black text-white hover:bg-black! !w-full"}
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};
