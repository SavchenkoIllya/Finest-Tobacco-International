import { MenuFilterKeys } from "@/app/lib";
import { cn, GroupDropdown, MenuFilterProps, VariantProp } from "@/app/ui";

export function Menu({
  menuFilters,
  variant = "dark",
}: MenuFilterProps & Partial<VariantProp>) {
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
        {Object.keys(menuFilters).map((key) => (
          <GroupDropdown
            key={key}
            title={key}
            values={menuFilters[key as MenuFilterKeys]}
            variant={variant}
          />
        ))}
      </div>
    </div>
  );
}
