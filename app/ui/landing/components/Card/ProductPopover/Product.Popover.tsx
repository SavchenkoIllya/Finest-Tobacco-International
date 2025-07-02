"use client";
import { Modal, ProductPopoverContent, useUrlParams } from "@/app/ui";
import { useEffect, useState } from "react";
import { useCatalogueStore } from "@/app/stores";
import { useShallow } from "zustand/shallow";

type ProductPopoverProps = {
  open: boolean;
  onClose: () => void;
};

export const ProductPopover = ({ open, onClose }: ProductPopoverProps) => {
  const [activeProduct] = useCatalogueStore(
    useShallow((state) => [state.activeProduct]),
  );

  const handleClose = () => {
    onClose();
  };

  if (!activeProduct) return null;

  return (
    <Modal open={open} onClose={handleClose}>
      <div className={"flex items-center md:items-end flex-col gap-8 m-20"}>
        <ProductPopoverContent product={activeProduct} />

        <div
          className={"max-md:fixed max-md:bottom-0 max-md:p-8 max-md:w-full"}
        >
          <button
            className={"button bg-black text-white hover:bg-black! !w-full"}
            onClick={handleClose}
          >
            X
          </button>
        </div>
      </div>
    </Modal>
  );
};
