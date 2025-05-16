import { LandingSections } from "@/app/lib";
import { InfoGrid } from "@/app/ui/landing/sections/About/components/InfoGrid";

export function About() {
  return (
    <section
      id={LandingSections.ABOUT}
      className="grid grid-cols-12 gap-4 place-items-center md:px-4 my-20"
    >
      <div className="col-start-4 col-span-6 flex justify-center">
        <h2 className={"h1"}>About us</h2>
      </div>

      <div className="px-4 col-start-1 md:col-start-3 col-span-12 md:col-span-8 flex justify-center flex-col">
        <div>
          <p className="text-justify md:max-w-3xl">
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
          <div className={"mt-4"}>
            <span className={"font-bold"}>Our Promise:</span>{" "}
            <span>Tradition. Quality. Affordability. </span>
          </div>
        </div>
      </div>
      <div
        className={"col-start-3 col-span-8 flex flex-col justify-center mt-20"}
      >
        <InfoGrid />
      </div>
    </section>
  );
}
