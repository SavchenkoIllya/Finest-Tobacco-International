import { LandingSections } from "@/app/lib";
import { SharedAdditionalAboutSection } from "@/app/types";

export const MissionSection = ({
  production_content,
}: {
  production_content: SharedAdditionalAboutSection;
}) => {
  return (
    <section
      id={LandingSections.PRODUCTION}
      className="bg-primary w-full py-10"
    >
      <div className={"container mx-auto"}>
        <div className={"flex flex-col items-center p-8"}>
          <h1 className="h1 !text-secondary">
            {production_content.title_main}
          </h1>
          <p className="text-lg mb-6 text-secondary text-justify">
            {production_content.description_main}
          </p>
          <h1 className="h1 !text-secondary">
            {production_content.title_secondary}
          </h1>
          <p className="text-lg mb-6 text-secondary text-justify">
            {production_content.description_secondary}
          </p>
        </div>
      </div>
    </section>
  );
};
