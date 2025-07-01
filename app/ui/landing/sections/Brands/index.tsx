"use client";
import { LandingSections } from "@/app/lib";
import { useState } from "react";
import { Brand, SharedBrandsSection } from "@/app/types";
import { cn, Modal } from "@/app/ui";

export const BrandsSection = ({
  brands_section_data,
}: {
  brands_section_data: SharedBrandsSection;
}) => {
  const [active, setActive] = useState<Brand | null>(null);

  const handleClick = (brand: Brand) => {
    setActive(brand);
  };

  return (
    <section id={LandingSections.BRANDS} className="bg-primary w-full">
      <div className={"container mx-auto"}>
        <div className={"flex flex-col items-center p-8"}>
          <h1 className="h1 !text-secondary">{brands_section_data.title}</h1>
          <p className={"text-secondary"}>{brands_section_data.subtitle}</p>
          <div className={"flex gap-8 m-8"}>
            {brands_section_data.brands?.map((brand) => (
              <button
                className={cn(
                  "cursor-pointer border-wrapper p-20 relative hover:scale-101 hover:opacity-60 transition-all",
                )}
                key={brand.id}
                onClick={() => handleClick(brand)}
              >
                <div className="border-right" />
                <div className="border-bottom" />
                <img
                  className={"w-md"}
                  alt={brand.name}
                  src={
                    process.env.NODE_ENV === "development"
                      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${brand.logo?.url}`
                      : brand.logo?.url
                  }
                />
              </button>
            ))}
          </div>

          <Modal open={Boolean(active)} onClose={() => setActive(null)}>
            <div className={"m-12 flex flex-col items-center gap-8 max-w-xl"}>
              <div className={"self-end"}>
                <button
                  className={"cursor-pointer p-2"}
                  onClick={() => setActive(null)}
                >
                  X
                </button>
              </div>
              <img
                className={"w-md"}
                alt={active?.name}
                src={
                  process.env.NODE_ENV === "development"
                    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${active?.logo?.url}`
                    : active?.logo?.url
                }
              />
              <p>{active?.description}</p>
            </div>
          </Modal>
        </div>
      </div>
    </section>
  );
};
