"use client";
import { LocalStorageNames } from "@/app/lib";
import { cn, EXPIRATION_DAYS } from "@/app/ui";
import { useEffect, useLayoutEffect, useState } from "react";

export const AgeModal = () => {
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const confirmDate = localStorage.getItem(
      LocalStorageNames.AGE_CONFIRMED_AT,
    );
    if (confirmDate) {
      const date = new Date(confirmDate);
      const now = new Date();
      const diffDays = (now.getTime() - date.getTime()) / (1000 * 3600 * 24);
      if (diffDays < EXPIRATION_DAYS) {
        setOpen(false);
      }
    } else {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClose = () => {
    const now = new Date();
    localStorage.setItem(LocalStorageNames.AGE_CONFIRMED_AT, now.toISOString());
    setOpen(false);
  };

  return (
    <div
      className={cn(
        "fixed inset-0 backdrop-blur-3xl z-200",
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
      )}
    >
      <div className={"flex h-full w-full justify-center items-center"}>
        <div
          className={cn(
            "w-full h-full flex flex-col md:flex-row justify-center items-center gap-8",
            "bg-primary/70",
            "w-fit h-fit p-20 rounded-4xl",
            "from-0% to-60%",
            "shadow-secondary/50 shadow-2xl",
          )}
        >
          <div className={"max-w-2xl"}>
            <h1 className={"h1 !text-accent"}>Hello dear Visitor</h1>
            <p>
              You are about to visit site regarding tobacco and smoking content,
              by clicking you are going to otsosat moyu valinu
            </p>
            <div className={"mt-4 flex justify-between"}>
              <button
                onClick={handleClose}
                className={
                  "button !bg-secondary !text-primary !hover:bg-secondary !w-full"
                }
              >
                Go
              </button>
              <button
                onClick={() => {
                  window.close();
                }}
                className={"cursor-pointer hover:underline w-full"}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
