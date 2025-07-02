import { cn, GroupDropdown, MenuFilterProps, VariantProp } from "@/app/ui";
import { useCatalogueStore } from "@/app/stores";
import { useShallow } from "zustand/shallow";

// TODO: optimize

export const Menu = ({ variant = "dark" }: Partial<VariantProp>) => {
  const [catalogueMenuItems, filters] = useCatalogueStore(
    useShallow((state) => [state.catalogueMenuItems, state.filters]),
  );

  return (
    <div className={"border-r-3 border-accent h-full"}>
      <div className={"flex gap-2"}>
        <img src={"/icons/filter.svg"} alt={"Filter icon"} />
        <h3
          className={cn(
            "h2 !text-3xl",
            variant === "light" ? "!text-primary" : "!text-secondary",
          )}
        >
          Filters
        </h3>
      </div>
      <div
        className={
          "flex flex-col p-8 pb-30 gap-2 overflow-y-scroll h-full scrollbar-hide"
        }
      >
        {catalogueMenuItems.formats && (
          <GroupDropdown
            title={"Formats"}
            values={catalogueMenuItems.formats}
            variant={variant}
            active={filters.format}
            filterKey={"format"}
          />
        )}

        {catalogueMenuItems.brands && (
          <GroupDropdown
            filterKey={"brand"}
            title={"Brands"}
            values={catalogueMenuItems.brands}
            variant={variant}
            active={filters.brand}
          />
        )}
      </div>
    </div>
  );
};
