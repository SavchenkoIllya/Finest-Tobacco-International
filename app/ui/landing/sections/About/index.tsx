import { LandingSections } from "@/app/lib";
import { InfoGrid } from "@/app/ui/landing/sections/About/components/InfoGrid";

export function About() {
  return (
    <section id={LandingSections.ABOUT} className="container mx-auto">
      <div
        className={"max-lg:flex-col flex gap-8 max-md:px-4 my-20 items-center"}
      >
        <div className="flex flex-col justify-center md:text-nowrap self-start">
          <h2 className={"h1"}>our promise:</h2>
          <h2 className={"h1"}>Tradition. Quality. Affordability.</h2>
        </div>

        <div className="columns-2 gap-8 text-justify">
          <p>
            We are a passionate tobacco manufacturer committed to delivering
            high-quality, affordable cigarettes for adult smokers. With more
            than a decade of expertise, our company blends time-honored tobacco
            traditions with modern innovation to create products that stand out
            in both taste and reliability. While our brand may not yet be widely
            known, we are driven by a clear philosophy: every smoker deserves
            access to quality without compromise. We focus on craftsmanship,
            consistency, and honest pricing — values that define who we are and
            what we offer. Proudly serving both domestic and international
            markets, we continue to expand our reach while maintaining the
            integrity and care that go into every product we make.
          </p>
        </div>
      </div>

      <InfoGrid />
    </section>
  );
}
