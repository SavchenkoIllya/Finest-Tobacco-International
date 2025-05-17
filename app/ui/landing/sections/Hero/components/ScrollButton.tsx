"use client";

import { LandingSections } from "@/app/lib";
import { safeScroll } from "@/app/ui";

export const ScrollButton = ({ text }: { text: string }) => {
  return (
    <button
      type="button"
      className="!bg-secondary rounded-full px-4 py-2 cursor-pointer hover:scale-105 transition-all mx-auto"
      onClick={() => {
        safeScroll(LandingSections.ABOUT);
      }}
    >
      {text}
    </button>
  );
};
