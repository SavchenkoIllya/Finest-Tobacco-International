import { FilterLabelContainer, ProductCard } from "@/app/ui";
import { Product } from "@/app/types";
import { useCatalogueStore } from "@/app/stores";
import { useShallow } from "zustand/shallow";
import { useMemo } from "react";

//  TODO: optimize
export const ProductsList = () => {
  const [products, filters, setActiveProduct, activeProduct] =
    useCatalogueStore(
      useShallow((state) => [
        state.products,
        state.filters,
        state.setActiveProduct,
        state.activeProduct,
      ]),
    );

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    let result = [...products];

    if (filters.format) {
      result = result.filter(
        (product) => product.format?.id === filters.format?.id,
      );
    }

    if (filters.brand) {
      result = result.filter(
        (product) => product.brand?.id === filters.brand?.id,
      );
    }

    if (filters.query) {
      const searchFields: (keyof Product)[] = ["title", "blend"];
      const query = filters.query.toLowerCase();

      result = result.filter((product) =>
        searchFields.some((field) => {
          if (typeof product[field] === "string") {
            return product[field]?.toLowerCase?.().includes(query);
          }
        }),
      );
    }

    return result;
  }, [filters, products]);

  return (
    <div className="p-8 flex flex-wrap gap-8 justify-center">
      <FilterLabelContainer />
      {!filteredProducts.length && <p>Nothing to show</p>}
      <div
        className={" flex flex-wrap justify-center md:justify-between gap-2"}
      >
        {filteredProducts?.map((product) => (
          <ProductCard
            open={product.id === activeProduct?.id}
            onClick={() => {
              setActiveProduct(product);
            }}
            onClose={() => {
              setActiveProduct(null);
            }}
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};
