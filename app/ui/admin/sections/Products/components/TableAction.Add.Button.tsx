"use client";
import { useState } from "react";
import { Modal } from "@/app/ui";
import { ProductModal } from "@/app/ui/admin/sections/Products/components/Product.Form.Modal";

export const TableActionAddButton = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <>
      <button
        className={
          "self-end w-fit flex items-center gap-4 px-4 py-1 bg-indigo-100 text-indigo-500 rounded-2xl hover:bg-indigo-200 hover:text-indigo-500 transition-all cursor-pointer"
        }
        onClick={() => setOpen(true)}
      >
        Add Product <div className={"text-4xl"}>+</div>
      </button>
      {open && (
        <ProductModal open={open} onClose={handleClose} onSubmit={() => {}} />
      )}
    </>
  );
};
