import { LandingSections } from "@/app/lib";

export const BrandsSection = () => {
  return (
    <section id={LandingSections.BRANDS} className="w-full">
      <div className={"container mx-auto"}>
        <div className={"flex flex-col items-center p-8"}>
          <h1 className="h1">BRANDS</h1>
        </div>
      </div>
    </section>
  );
};
