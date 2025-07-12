"use client";
import {
  About,
  AgeModal,
  BrandsSection,
  CatalogueSection,
  Catchphrase,
  ContactsSection,
  FooterSection,
  Header,
  Hero,
  LoaderSection,
  LocalesInitializer,
  MissionSection,
  ProductionSection,
} from "@/app/ui";
import {useEffect, useState} from "react";
import { useGetGlobals, useGetProductTranslation } from "@/app/hooks";
import { useLanguageStore, useProductTranslationsStore } from "@/app/stores";
import { PillarsSection } from "@/app/ui/landing/sections/Pilars";
import { useShallow } from "zustand/shallow";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const currentLanguage = useLanguageStore((state) => state.current);
  const [setProductsTranslations] = useProductTranslationsStore(
    useShallow((state) => [state.setProductsTranslations]),
  );
  const { query: getGlobals, data, isPending } = useGetGlobals();
  const {
    query: getProductTranslations,
    data: translationsData,
    isSuccess,
  } = useGetProductTranslation();

  useEffect(()=>{
    setIsClient(true)
  },[])

  useEffect(() => {
    if(!isClient) return;

    getGlobals();
    getProductTranslations();
  }, [currentLanguage, isClient]);

  useEffect(() => {
    if (translationsData) {
      setProductsTranslations(translationsData);
    }
  }, [currentLanguage, isSuccess, isClient]);

  return (
    <>
      {!isClient && <LoaderSection />}
      {isPending && <LoaderSection />}
      <LocalesInitializer />

      {data?.age_modal && <AgeModal age_modal_content={data.age_modal} />}

      <div className="relative">
        <Header header_content={data?.Header} />
        <Hero video_url={data?.video_url} />

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
          <section className={"w-full flex justify-center text-center mb-12"}>
            <Catchphrase phrase={data.catchphrase} />
          </section>
        )}

        {data?.brands_section && (
          <BrandsSection brands_section_data={data.brands_section} />
        )}

        {data?.catalogue && (
          <CatalogueSection catalogue_data={data.catalogue} />
        )}

        {data?.contacts_section && (
          <ContactsSection
            contacts_content={data.contacts_section}
            location={data?.map_location}
          />
        )}

        {data?.footer_section && (
          <FooterSection footer_content={data.footer_section} />
        )}
      </div>
    </>
  );
}
