"use client";
import {
  About,
  AgeModal,
  BrandsSection,
  ContactsSection,
  Header,
  Hero,
  LoaderSection,
  LocalesInitializer,
  Production,
  ScrollIndicator,
} from "@/app/ui";
import { useEffect } from "react";
import { useGetGlobals } from "@/app/hooks";
import { useLanguageStore } from "@/app/stores";

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
      <ScrollIndicator />
      <div className="relative">
        <Header header_content={data?.Header} />
        <Hero video_url={data?.video?.url} />
        {data?.about_content && <About about_content={data.about_content} />}
        {data?.brands_section && (
          <BrandsSection brands_section_data={data.brands_section} />
        )}
        {data?.additional_about_section && (
          <Production production_content={data?.additional_about_section} />
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
