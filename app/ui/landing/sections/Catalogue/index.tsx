"use server";
import { HomePageProps } from "@/app/[lang]/page";
import { LandingSections } from "@/app/lib";
import { Loader, Menu, Search } from "@/app/ui";
import { ProductsList } from "@/app/ui/landing/sections/Catalogue/components";
import { SliderMenu } from "@/app/ui/landing/sections/Catalogue/components/Slider.Menu";
import { Suspense } from "react";

export async function CatalogueSection(props: HomePageProps) {
  const searchParams = await props.searchParams;
  // const locale = await props.params.lang;

  return (
    <section id={LandingSections.CATALOGUE} className="py-10 w-full">
      <div className="container mx-auto h-[80dvh]">
        {/*<div className="justify-center md:justify-normal grid grid-cols-4 grid-rows-[auto_1fr] h-full">*/}
        {/*  <div className="col-span-4 mx-4 md:col-start-3 md:col-span-2 mb-6">*/}
        {/*    <div className={"flex gap-2"}>*/}
        {/*      <SliderMenu menuFilters={menuFilters} />*/}
        {/*      <Search />*/}
        {/*    </div>*/}
        {/*  </div>*/}

        {/*  <div className="hidden md:block overflow-hidden">*/}
        {/*    <Menu menuFilters={menuFilters} variant={"light"}/>*/}
        {/*  </div>*/}

        {/*  <div className="col-span-4 md:col-span-3 overflow-y-scroll scrollbar-hide">*/}
        {/*    <Suspense*/}
        {/*      key={Object.values(filters).join("-")}*/}
        {/*      fallback={<Loader />}*/}
        {/*    >*/}
        {/*      <ProductsList filters={filters} />*/}
        {/*    </Suspense>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </section>
  );
}
