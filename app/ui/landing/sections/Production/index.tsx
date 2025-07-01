import { SharedProductionSection } from "@/app/types";

export const ProductionSection = ({
  production_content,
}: {
  production_content: SharedProductionSection;
}) => {
  return (
    <section
      // id={LandingSections.PRODUCTION}
      className="bg-primary w-full py-10"
    >
      <div className={"container mx-auto"}>
        <div className={"flex flex-col items-center p-8"}>
          <h1 className="h1 !text-secondary">{production_content.title}</h1>
          <p className="text-lg mb-6 text-secondary text-justify">
            {production_content.description}
          </p>
          <h1 className="h2 !text-secondary">
            {production_content.catchphrase}
          </h1>
        </div>
      </div>
    </section>
  );
};
