"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/app/ui";

type Language = {
  code: string;
  name: string;
};

// TOOD: export languages
const languages: Language[] = [
  { code: "en", name: "EN" },
  { code: "ru", name: "RU" },
];

export const LanguageSwitch = () => {
  const params = useParams();
  const router = useRouter();
  const currentLang = (params?.lang as string) || "en";
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Находим текущий язык из списка
  const currentLanguage =
    languages.find((lang) => lang.code === currentLang) || languages[0];

  // Закрываем выпадающий список при клике вне компонента
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

  const handleLanguageChange = (langCode: string) => {
    setOpen(false);
    router.push(`/${langCode}`);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-1  text-primary cursor-pointer font-medium uppercase transition-colors duration-200"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span>{currentLanguage.name}</span>
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
          {languages.map((language) => (
            <button
              key={language.code}
              disabled={currentLang === language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`
              cursor-pointer
                block w-full text-left px-4 py-2 text-sm text-white hover:bg-accent/80
                ${currentLang === language.code ? "bg-accent" : "bg-accent/40"}
              `}
            >
              {language.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
