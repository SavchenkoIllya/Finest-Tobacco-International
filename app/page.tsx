"use client";
import {
  About,
  AgeModal,
  BrandsSection,
  CatalogueSection,
  Catchphrase,
  ContactsSection,
  Header,
  Hero,
  LoaderSection,
  LocalesInitializer,
  MissionSection,
  ProductionSection,
} from "@/app/ui";
import { useEffect } from "react";
import { useGetGlobals } from "@/app/hooks";
import { useLanguageStore } from "@/app/stores";
import { PillarsSection } from "@/app/ui/landing/sections/Pilars";

export default function Home() {
  const currentLanguage = useLanguageStore((state) => state.current);
  const { query, data, isPending } = useGetGlobals();

  useEffect(() => {
    query();
  }, [currentLanguage]);

  return (
    <>
      {isPending && <LoaderSection />}
      <LocalesInitializer />

      {data?.age_modal && <AgeModal age_modal_content={data.age_modal} />}

      <div className="relative">
        <Header header_content={data?.Header} />
        <Hero video_url={data?.video?.url} />

        {data?.about_content && <About about_content={data.about_content} />}

        {data?.about_content?.pillars && (
          <PillarsSection pillars={data.about_content.pillars} />
        )}

        {data?.additional_about_section && (
          <MissionSection production_content={data?.additional_about_section} />
        )}

        {data?.production_section && (
          <ProductionSection production_content={data.production_section} />
        )}

        {data?.catchphrase && (
          <section className={"w-full flex justify-center text-center"}>
            <Catchphrase phrase={data.catchphrase} />
          </section>
        )}

        {data?.brands_section && (
          <BrandsSection brands_section_data={data.brands_section} />
        )}

        {data?.catalogue && (
          <CatalogueSection
            brands={data.catalogue?.brands}
            formats={data.catalogue?.formats}
          />
        )}

        {data?.contacts_section && (
          <ContactsSection
            contacts_content={data.contacts_section}
            location={data?.map_location}
            copyright={data?.copyrights_text}
            contacts={data.Header?.Contacts}
          />
        )}
      </div>
    </>
  );
}
