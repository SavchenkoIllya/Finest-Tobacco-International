import { InfoCard, InfoCardProps } from "@/app/ui";

export const pillars: InfoCardProps[] = [
  { title: "15+", label: "years of experience" },
  { title: "5+", label: "cigarette formats" },
  { title: "2", label: "production facilities" },
  { title: "10+", label: "markets where we operate" },
  { title: "10+", label: "cigarette brands" },
  { title: "300+", label: "employees around the world" },
];

export const InfoGrid = () => {
  const cards = pillars.map((pillar, i) => (
    <div key={`${pillar.title}-${i}`} className={"relative border-wrapper"}>
      <InfoCard title={pillar.title} label={pillar.label} />
    </div>
  ));

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-accent mt-20">
      {cards}
    </div>
  );
};
