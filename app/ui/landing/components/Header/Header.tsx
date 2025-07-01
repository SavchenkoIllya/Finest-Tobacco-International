"use client";
import { cn, LanguageSwitch } from "@/app/ui";
import { ContactsList, SliderNavigation } from "@/app/ui/landing/components";
import { SharedHeader } from "@/app/types";

export function Header({
  header_content,
}: Readonly<{ header_content?: SharedHeader | null }>) {
  return (
    <header
      className={cn(
        "fixed top-0 w-[100dvw] z-30 transition-all duration-300 bg-secondary border-b-2 border-primary",
      )}
    >
      <div className="relative z-10">
        <div className="flex items-center justify-between mx-8 my-4">
          <SliderNavigation />
          <div>
            {header_content?.logo?.url && (
              <img
                src={
                  process.env.NODE_ENV === "development"
                    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${header_content?.logo?.url}`
                    : header_content?.logo.url
                }
                alt="Tobacco & cigarettes trading logo"
                height={60}
                width={200}
              />
            )}
          </div>
          <div className={"flex gap-4"}>
            <div className={"hidden md:block"}>
              <ContactsList
                contacts={header_content?.Contacts}
                showFull={false}
                wrapperClasses={"flex gap-2"}
              />
            </div>
            <LanguageSwitch />
          </div>
        </div>
      </div>
    </header>
  );
}
