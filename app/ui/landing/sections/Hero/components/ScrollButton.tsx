"use client";

import { LandingSections } from "@/app/lib";
import { safeScroll } from "@/app/ui";

export const ScrollButton = () => {
  return (
    <button
      type="button"
      className="button !bg-white"
      onClick={() => {
        safeScroll(LandingSections.CATALOGUE);
      }}
    >
      Welcome to our business
    </button>
  );
};
