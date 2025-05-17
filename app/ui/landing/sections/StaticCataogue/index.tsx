import { ProductsList } from "@/app/ui/landing/sections/Catalogue/components";
import { getBrands, getCategories, ProductFilters } from "@/app/actions";
import { HomePageProps } from "@/app/[lang]/page";
import { FilterTabs } from "./components";
import { LandingSections } from "@/app/lib";

export async function StaticCataloguePage(props: HomePageProps) {
  const searchParams = await props.searchParams;
  const locale = await props.params.lang;

  const filters: ProductFilters = {
    category: searchParams?.categories ?? "",
    brand: searchParams?.brands ?? "",
    query: searchParams?.query ?? "",
    locale: locale ?? "en",
  };

  const categories = await getCategories();
  const brands = await getBrands();

  const menuFilters = {
    categories,
    brands,
  };

  return (
    <section id={LandingSections.CATALOGUE} className="container mx-auto mb-40">
      <div className={"flex flex-col items-center justify-center gap-8"}>
        <h2 className={"h1"}>Catalogue</h2>
        <div className={"self-start ml-20"}>
          <FilterTabs menuFilters={menuFilters} />
        </div>
        <ProductsList filters={filters} />
      </div>
    </section>
  );
}
