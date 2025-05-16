"use client";

import { MouseEventHandler } from "react";

interface FilterProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Filter = ({ onClick }: FilterProps) => {
  return (
    <button
      className="block md:hidden rounded-full p-2 bg-secondary flex justify-center items-center cursor-pointer"
      onClick={onClick}
    >
      <img
        src="/icons/filter.svg"
        alt="filter icon"
        className="filter invert brightness-0"
      />
    </button>
  );
};
