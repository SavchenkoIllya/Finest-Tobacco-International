import { SharedProductionSection } from "@/app/types";

export const ProductionSection = ({
  production_content,
}: {
  production_content: SharedProductionSection;
}) => {
  return (
    <section
      // id={LandingSections.PRODUCTION}
      className="w-full py-10"
    >
      <div className={"container mx-auto"}>
        <div className={"flex flex-col items-center p-8"}>
          <h1 className="h1 ">{production_content.title}</h1>
          <p className="text-lg mb-6 text-primary text-justify">
            {production_content.description}
          </p>
          <h1 className="h2 ">{production_content.catchphrase}</h1>
        </div>
      </div>
    </section>
  );
};
