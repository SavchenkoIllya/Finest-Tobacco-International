"use client";
import { cn, LanguageSwitch, NavigationItem } from "@/app/ui";
import { ContactsList, SliderNavigation } from "@/app/ui/landing/components";
import { SharedHeader } from "@/app/types";

export function Header({
  header_content,
}: Readonly<{ header_content?: SharedHeader | null }>) {
  return (
    <header
      className={cn(
        "fixed top-0 w-[100dvw] z-90 transition-all duration-300 bg-secondary",
      )}
    >
      <div className="relative z-10v">
        <div className="flex items-center justify-between mx-8 my-4">
          {header_content?.navbar?.navitems && header_content?.Contacts && (
            <SliderNavigation
              navitems={header_content.navbar.navitems}
              contacts={header_content.Contacts}
            />
          )}
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
          <div>
            <nav>
              <ul className={"max-md:hidden flex justify-center gap-4"}>
                {header_content?.navbar?.navitems?.map((item) => (
                  <NavigationItem
                    key={item.id}
                    section={item.section_id}
                    label={item.name}
                  />
                ))}
              </ul>
            </nav>
          </div>
          <div className={"flex gap-4"}>
            <div className={"hidden md:block"}>
              <ContactsList
                contacts={header_content?.Contacts}
                wrapperClasses={"flex gap-2"}
              />
            </div>
            <LanguageSwitch />
          </div>
        </div>
        <div className="header-line mx-auto" />
      </div>
    </header>
  );
}
