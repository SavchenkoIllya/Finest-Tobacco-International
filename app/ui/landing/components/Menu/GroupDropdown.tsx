"use client";
import { cn, useUrlParams, VariantProp } from "@/app/ui";
import Image from "next/image";
import { useState } from "react";

export const GroupDropdown = ({
  title,
  values,
  variant = "dark",
}: {
  title: string;
  values: string[];
} & Partial<VariantProp>) => {
  const { getParam, setParam } = useUrlParams(0);
  const param = getParam(title);

  const [isOpen, setIsOpen] = useState(
    values.some((el) => el.toLowerCase() === param),
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
        <p className={"capitalize"}>{title.replaceAll("_", " ")}</p>
        <Image
          width={10}
          height={10}
          src={"/icons/chevron.svg"}
          alt={"chevron icon"}
          className={cn(
            "transition-all",
            isOpen ? "rotate-0" : "rotate-90",
          )}
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
        {values.map((item, idx) => {
          const handleSelectParam = () => {
            setParam(title, item);
          };
          return (
            <button
              key={idx + item}
              className={cn(
                "w-full text-left px-4 hover:text-accent focus:outline-none transition-all duration-200 cursor-pointer",
                variant === "dark" ? "text-secondary" : "text-primary",
                item.toLowerCase() === param?.toLowerCase() && "text-accent",
              )}
              onClick={handleSelectParam}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};
