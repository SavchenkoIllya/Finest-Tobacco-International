"use client";
import { LandingSections } from "@/app/lib";
import { useGetBrands } from "@/app/hooks";
import { useEffect, useState } from "react";
import { Brand } from "@/app/types";
import { cn, Loader } from "@/app/ui";
import { useLanguageStore } from "@/app/stores";

export const BrandsSection = () => {
  const currentLanguage = useLanguageStore((state) => state.current);

  const [active, setActive] = useState<Brand | null>();
  const { query, data, isPending, isSuccess, isError } = useGetBrands();

  useEffect(() => {
    query();
  }, []);

  useEffect(() => {
    switch (true) {
      case Boolean(isSuccess && data?.length):
        setActive(data![0]);
    }
  }, [isPending, isSuccess, isError, currentLanguage]);

  const handleClick = (brand: Brand) => {
    setActive(brand);
  };

  return (
    <section id={LandingSections.BRANDS} className="w-full">
      <div className={"container mx-auto"}>
        <div className={"flex flex-col items-center p-8"}>
          <h1 className="h1">BRANDS</h1>
          {isPending && <Loader />}
          <div className={"flex gap-8 mx-8"}>
            {data?.map((brand) => (
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
