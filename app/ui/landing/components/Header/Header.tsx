"use client";
import { cn, LanguageSwitch } from "@/app/ui";
import { ContactsList, SliderNavigation } from "@/app/ui/landing/components";

export function Header() {
  return (
    <header
      className={cn(
        "fixed top-0 w-[100dvw] z-20 transition-all duration-300 bg-secondary border-b-2 border-primary",
      )}
    >
      <div className="relative z-10">
        <div className="flex items-center justify-between mx-8 my-4">
          <SliderNavigation />
          <div>
            <img
              src="/logo.svg"
              alt="Tobacco & cigarettes trading logo"
              height={60}
              width={200}
            />
          </div>
          <div className={"flex gap-4"}>
            <div className={"hidden md:block"}>
              <ContactsList showFull={false} wrapperClasses={"flex gap-2"} />
            </div>
            <LanguageSwitch />
          </div>
        </div>
      </div>
    </header>
  );
}
