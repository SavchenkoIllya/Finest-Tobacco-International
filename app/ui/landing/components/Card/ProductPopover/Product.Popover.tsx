"use client";
import { Modal, ProductPopoverContent } from "@/app/ui";
import { useCatalogueStore, useProductTranslationsStore } from "@/app/stores";
import { useShallow } from "zustand/shallow";

type ProductPopoverProps = {
  open: boolean;
  onClose: () => void;
};

export const ProductPopover = ({ open, onClose }: ProductPopoverProps) => {
  const [activeProduct] = useCatalogueStore(
    useShallow((state) => [state.activeProduct]),
  );
  const [close_text] = useProductTranslationsStore(
    useShallow((state) => [state.productsTranslations?.close_text]),
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
          className={
            "max-md:fixed max-md:bottom-0 max-md:p-8 max-md:w-full max-md:shadow-3xl"
          }
        >
          <button
            className={"button bg-primary text-white hover:bg-primary! !w-full"}
            onClick={handleClose}
          >
            {close_text ?? "X"}
          </button>
        </div>
      </div>
    </Modal>
  );
};
