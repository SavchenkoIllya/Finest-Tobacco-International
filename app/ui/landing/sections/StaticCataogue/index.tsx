import { ProductsList } from "@/app/ui/landing/sections/Catalogue/components";
import { getBrands, getCategories, ProductFilters } from "@/app/actions";
import { HomePageProps } from "@/app/[lang]/page";
import { FilterTabs } from "./components";
import { LandingSections } from "@/app/lib";

export async function StaticCataloguePage(props: HomePageProps) {
  const searchParams = await props.searchParams;
  const locale = (await props.params).lang;

  const filters: ProductFilters = {
    category: searchParams?.category ?? "",
    brand: searchParams?.brand ?? "",
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
        <h2 className={"h1"}>Brands</h2>
        <p>
          Our brands make up a core of our portfolio. Each has its own heritage,
          taste, uniqueness.
        </p>
        <div className={"self-start mx-8 md:mx-20 overflow-hidden"}>
          <FilterTabs menuFilters={menuFilters} />
        </div>
        <ProductsList filters={filters} />
      </div>
    </section>
  );
}
