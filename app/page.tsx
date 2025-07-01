"use client";
import {
  About,
  AgeModal,
  BrandsSection,
  ContactsSection,
  Header,
  Hero,
  Loader,
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
  const { query, data, isPending, isSuccess, isError } = useGetGlobals();

  useEffect(() => {
    query({ lang: currentLanguage });
  }, []);

  return (
    <>
      {isPending && <LoaderSection />}
      <LocalesInitializer />
      <AgeModal />
      <ScrollIndicator />
      <div className="relative">
        <Header header_content={data?.Header} />
        <Hero video_url={data?.video?.url} />
        <About />
        <BrandsSection />
        <Production />
        <ContactsSection />
      </div>
    </>
  );
}
