"use client";
import { cn, MenuFilterProps, useUrlParams } from "@/app/ui";

export const FilterTabs = ({ menuFilters }: MenuFilterProps) => {
  const { getParam, setParam } = useUrlParams(0);
  const brandParam = getParam("brand");
  const categoryParam = getParam("category");

  console.log(categoryParam);

  return (
    <div>
      <div className={"flex gap-2"}>
        {menuFilters.brands?.map((brand) => (
          <button
            className={"cursor-pointer"}
            key={brand}
            onClick={() => setParam("brand", brand)}
          >
            <h4
              className={cn(
                "h2 !font-normal relative",
                brand.toLowerCase() === brandParam &&
                  "!font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-accent after:h-1.5 after:w-full",
              )}
            >
              {brand}
            </h4>
          </button>
        ))}
      </div>
      <div className={"flex gap-2"}>
        {menuFilters.categories?.map((category) => {
          return (
            <button
              className={"cursor-pointer"}
              key={category}
              onClick={() => setParam("category", category)}
            >
              <h4
                className={cn(
                  "h2 !font-normal relative",
                  category.toLowerCase() === categoryParam &&
                    "!font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-accent after:h-1.5 after:w-full",
                )}
              >
                {category}
              </h4>
            </button>
          );
        })}
      </div>
    </div>
  );
};
