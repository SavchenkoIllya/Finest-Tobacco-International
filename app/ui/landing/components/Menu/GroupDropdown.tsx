"use client";
import { cn, useUrlParams, VariantProp } from "@/app/ui";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Brand, Format } from "@/app/types";
import { CatalogueFilters, useCatalogueStore } from "@/app/stores";
import { useShallow } from "zustand/shallow";

export const GroupDropdown = ({
  title,
  values,
  variant = "dark",
  active,
  filterKey,
}: {
  title: string;
  values: Format[] | Brand[];
  active: Format | Brand | null;
  filterKey: keyof CatalogueFilters;
} & Partial<VariantProp>) => {
  const [setFilters, filters] = useCatalogueStore(
    useShallow((state) => [state.setFilters, state.filters]),
  );

  const [isOpen, setIsOpen] = useState(
    filters.brand?.id === active?.id || filters.format?.id === active?.id,
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-left">
      <button
        onClick={toggleDropdown}
        className={cn(
          "w-full text-left font-semibold py-2 pr-6 rounded-md flex justify-between",
          variant === "dark" ? "text-secondary" : "text-primary",
        )}
      >
        <p className={"capitalize"}>{title}</p>
        <Image
          width={10}
          height={10}
          src={"/icons/chevron.svg"}
          alt={"chevron icon"}
          className={cn("transition-all", isOpen ? "rotate-0" : "rotate-90")}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen
            ? "max-h-40 opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-95 pointer-events-none",
        )}
      >
        {values.map((item) => {
          const currentActive = active?.id === item.id;
          const handleSelectParam = () => {
            if (currentActive) {
              setFilters({
                ...filters,
                [filterKey]: null,
              });

              return;
            }

            setFilters({
              ...filters,
              [filterKey]: item,
            });
          };

          return (
            <button
              key={item.id}
              className={cn(
                "w-full text-left px-4 hover:text-accent focus:outline-none transition-all duration-200 cursor-pointer",
                variant === "dark" ? "text-secondary" : "text-primary",
                currentActive && "font-bold",
              )}
              onClick={handleSelectParam}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
