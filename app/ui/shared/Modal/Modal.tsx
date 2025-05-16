"use client";
import { cn } from "@/app/ui";
import { ReactNode, useEffect } from "react";

export interface ModalProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

export const Modal = ({ children, open, onClose }: ModalProps) => {
  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <div
      onClick={handleClose}
      className={cn(
        "fixed inset-0 w-full h-full z-100 backdrop-blur-xs transition-all duration-200",
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
          "max-md:w-full max-md:pb-20 bg-secondary max-md:h-full max-md:rounded-none max-md:relative",
          "w-fit h-fit overflow-auto rounded-4xl",
          "shadow-primary/20 shadow-2xl",
        )}
      >
        {children}
      </div>
    </div>
  );
};
