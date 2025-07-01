"use client";
import { LandingSections } from "@/app/lib";
import { useState } from "react";
import { Brand, SharedBrandsSection } from "@/app/types";
import { cn } from "@/app/ui";

export const BrandsSection = ({
  brands_section_data,
}: {
  brands_section_data: SharedBrandsSection;
}) => {
  const [active, setActive] = useState<Brand | null>(
    brands_section_data.brands?.[0] ?? null,
  );

  const handleClick = (brand: Brand) => {
    setActive(brand);
  };

  return (
    <section id={LandingSections.BRANDS} className="w-full">
      <div className={"container mx-auto"}>
        <div className={"flex flex-col items-center p-8"}>
          <h1 className="h1">{brands_section_data.title}</h1>
          <div className={"flex gap-8 mx-8"}>
            {brands_section_data.brands?.map((brand) => (
              <button
                className={cn(
                  "cursor-pointer h1",
                  brand.name === active?.name && "underline underline-offset-8",
                )}
                key={brand.id}
                onClick={() => handleClick(brand)}
              >
                {brand.name}
              </button>
            ))}
          </div>

          {active && (
            <div className={"my-8 flex flex-col items-center gap-8"}>
              <img
                alt={active.name}
                src={
                  process.env.NODE_ENV === "development"
                    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${active.logo?.url}`
                    : active.logo?.url
                }
                className={"w-md"}
              />
              <p>{active.description}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
