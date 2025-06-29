import { LandingSections } from "@/app/lib";
import { Catchphrase } from "@/app/ui";

export const Production = () => {
  return (
    <section
      id={LandingSections.PRODUCTION}
      className="bg-primary w-full py-10"
    >
      <div className={"container mx-auto"}>
        <div className={"flex flex-col items-center p-8"}>
          <h1 className="h1 !text-secondary">Our Mission</h1>
          <p className="text-lg mb-6 text-secondary text-justify">
            To combine tradition with innovation in crafting high-quality,
            affordable cigarettes for adult smokers worldwide. We are dedicated
            to excellence in every step — from sourcing the finest tobacco to
            delivering products that meet the highest standards of taste,
            consistency, and value.
          </p>
          <h1 className="h1 !text-secondary">Our Vision</h1>
          <p className="text-lg mb-6 text-secondary text-justify">
            To be respected and enduring brand — driven by tradition, defined by
            quality, and committed to responsible growth. We proudly serve with
            products crafted to the highest standards, stan ding firm in our
            belief that choice, authenticity, and legacy matter in a changing
            world.
          </p>
          <Catchphrase />
        </div>
      </div>
    </section>
  );
};
