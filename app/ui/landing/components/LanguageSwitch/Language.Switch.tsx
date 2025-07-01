"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/app/ui";
import { useLanguageStore } from "@/app/stores";
import { useShallow } from "zustand/shallow";

export const LanguageSwitch = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [currentLanguage, availableLanguages, changeLocale] = useLanguageStore(
    useShallow((state) => [
      state.current,
      state.availableLanguages,
      state.changeLocale,
    ]),
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-1  text-primary cursor-pointer font-medium uppercase transition-colors duration-200"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span>{currentLanguage}</span>
        <Image
          width={10}
          height={10}
          src={"/icons/chevron.svg"}
          alt={"chevron icon"}
        />
      </button>

      <div
        className={cn(
          `
          absolute right-0 mt-4 bg-secondary/20 backdrop-blur-sm
          min-w-12 rounded shadow-lg z-10 overflow-hidden
          transition-all duration-200 origin-top-right`,
          open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none",
        )}
      >
        <div className="">
          {availableLanguages?.map((language) => (
            <button
              key={language}
              disabled={currentLanguage === language}
              onClick={() => changeLocale(language)}
              role="menuitem"
              className={cn(
                "cursor-pointer block w-full text-left px-4 py-2 text-sm text-white hover:bg-accent/80",
                currentLanguage === language ? "bg-accent" : "bg-accent/40",
              )}
            >
              {language}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
