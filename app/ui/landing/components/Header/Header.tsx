"use client";
import { cn, LanguageSwitch } from "@/app/ui";
import { ContactsList, SliderNavigation } from "@/app/ui/landing/components";
import { SharedHeader } from "@/app/types";
import { getStrapiURL } from "@/app/utils/getStrapiUrl";
import { useEffect, useState } from "react";
import { getFeatureEnabled } from "@/app/actions";

export function Header({
  header_content,
}: Readonly<{ header_content?: SharedHeader | null }>) {
  const [isLanguageEnabled, setIsLanguageEnabled] = useState(false);

  useEffect(() => {
    const req = async () => {
      const feature = await getFeatureEnabled("localisation");

      if (feature?.data?.[0]) {
        setIsLanguageEnabled(feature.data[0].active);
      }
    };

    void req();
  }, []);

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
                src={`${getStrapiURL()}${header_content.logo.url}`}
                alt="Tobacco & cigarettes trading logo"
                height={60}
                width={200}
              />
            )}
          </div>
          <div className={"flex gap-4"}>
            <div className={"hidden md:block"}>
              <ContactsList showFull={false} wrapperClasses={"flex gap-2"} />
            </div>
            {isLanguageEnabled && <LanguageSwitch />}
          </div>
        </div>
      </div>
    </header>
  );
}
