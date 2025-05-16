import {
  getFilteredProductsWithTranslations,
  ProductFilters,
} from "@/app/actions";
import { FilterLabelContainer, ProductCard } from "@/app/ui";

export async function ProductsList({
  filters,
}: Readonly<{
  filters: ProductFilters;
}>) {
  const products = await getFilteredProductsWithTranslations(filters);

  return (
    <div className="p-8 flex flex-wrap gap-8 justify-center">
      <FilterLabelContainer />
      {!products.length && <p>Nothing to show</p>}
      <div
        className={" flex flex-wrap justify-center md:justify-between gap-2"}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
