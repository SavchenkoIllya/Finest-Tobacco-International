import { LandingSections } from "@/app/lib";
import { Menu, Search, ProductsList } from "@/app/ui";
import { SliderMenu } from "@/app/ui/landing/sections/Catalogue/components/Slider.Menu";
import { useGetProducts } from "@/app/hooks";
import { useEffect } from "react";
import { SharedCatalogue } from "@/app/types";
import { useCatalogueStore, useLanguageStore } from "@/app/stores";
import { useShallow } from "zustand/shallow";

export const CatalogueSection = ({
  catalogue_data,
}: {
  catalogue_data: SharedCatalogue;
}) => {
  const currentLang = useLanguageStore((state) => state.current);
  const [setCatalogueMenuItems, setProducts, filters] = useCatalogueStore(
    useShallow((state) => [
      state.setCatalogueMenuItems,
      state.setProducts,
      state.filters,
    ]),
  );
  const { data, query, isSuccess } = useGetProducts();

  useEffect(() => {
    query();

    setCatalogueMenuItems({
      brands: catalogue_data.brands ?? null,
      formats: catalogue_data.formats ?? null,
    });
  }, [currentLang, filters]);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [isSuccess]);

  return (
    <section id={LandingSections.CATALOGUE} className="py-10 w-full">
      <h1 className={"h1 text-center mb-10"}>{catalogue_data.title}</h1>
      <div className="container mx-auto h-[80dvh]">
        <div className="justify-center md:justify-normal grid grid-cols-4 grid-rows-[auto_1fr] h-full">
          <div className="col-span-4 mx-4 md:col-start-3 md:col-span-2 mb-6">
            <div className={"flex gap-2"}>
              <SliderMenu />
              <Search />
            </div>
          </div>

          <div className="hidden md:block overflow-hidden">
            <Menu variant={"light"} />
          </div>

          <div className="col-span-4 md:col-span-3 overflow-y-scroll scrollbar-hide">
            <ProductsList />
          </div>
        </div>
      </div>
    </section>
  );
};
