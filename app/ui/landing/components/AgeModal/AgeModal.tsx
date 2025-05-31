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
            "bg-secondary",
            "w-fit h-fit p-20 rounded-4xl",
            "from-0% to-60%",
            "shadow-secondary/50 shadow-2xl",
            "max-md:w-full max-md:h-full rounded-none",
          )}
        >
          <div className={"max-w-2xl"}>
            <h1 className={"h1 !text-accent"}>Age Verification Required</h1>
            <p>
              This website contains information about tobacco products and is
              intended only for adults. You must be 18 years of age or older to
              enter. By clicking &#34;Enter,&#34; you confirm that you are at
              least 18 years old and agree to comply with your local laws
              regarding tobacco use.
            </p>
            <div className={cn("mt-4 flex justify-between", "max-md:flex-col max-md:gap-4")}>
              <button
                onClick={handleClose}
                className={"button !bg-primary !text-secondary !w-full"}
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
