import { InfoCard, InfoCardProps } from "@/app/ui";
import { SharedPillar } from "@/app/types";

export const InfoGrid = ({ pillars }: { pillars: SharedPillar[] }) => {
  const cards = pillars.map((pillar, i) => (
    <div
      key={`${pillar.title}-${i}`}
      className={"relative border-wrapper w-[150px] md:w-[250px] h-[172px]"}
    >
      <InfoCard title={pillar.title} label={pillar.label} />
    </div>
  ));

  return (
    <div className="mx-auto grid max-md:grid-cols-2 grid-cols-3 w-fit place-items-center">
      {cards}
    </div>
  );
};
