import { LandingSections } from "@/app/lib";
import { InfoGrid } from "@/app/ui/landing/sections/About/components/InfoGrid";
import { SharedAboutContent } from "@/app/types";

export const About = ({
  about_content,
}: {
  about_content: SharedAboutContent;
}) => {
  return (
    <section id={LandingSections.ABOUT} className="container mx-auto my-20">
      <div
        className={"max-lg:flex-col flex gap-8 max-md:px-4 mb-20 items-center"}
      >
        <div className="flex flex-col justify-center md:text-nowrap self-start">
          <h2 className={"h1"}>{about_content.main_title}</h2>
          <h2 className={"h1"}>{about_content.secondary_title}</h2>
        </div>

        <div className="columns-2 gap-8 text-justify">
          <p>{about_content.description}</p>
        </div>
      </div>

      {about_content?.pillars && <InfoGrid pillars={about_content.pillars} />}
    </section>
  );
};
