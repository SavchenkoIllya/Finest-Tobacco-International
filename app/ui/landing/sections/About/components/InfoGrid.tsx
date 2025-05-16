import {InfoCard, InfoCardProps} from "@/app/ui";

export const pillars: InfoCardProps[] = [
  {title: "Certified facilities"},
  {title: "Efficient distributions"},
  {title: "Smart inventory management"},
  {title: "Inovative technologies"},
  {title: "Certified facilities"},
  {title: "Personal success"},
  {title: "One more"},
  {title: "Two more"},
]

export const InfoGrid = () => {
  const cards = pillars.map((pillar, i) => (
      <div
          key={`${pillar.title}-${i}`}
          className={`
        border-accent border-b-2 border-r-2
        sm:[&:not(:nth-child(4n))]:border-r-2
        sm:[&:nth-child(4n)]:border-r-0
        sm:[&:not(:nth-child(4n+1))]:border-l-2
        [&:nth-last-child(-n+2)]:border-b-0
        sm:[&:nth-last-child(-n+4)]:border-b-0
        even:border-r-0 sm:even:border-r-2
      `}
      >
        <InfoCard title={pillar.title} />
      </div>
  ))

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-accent mt-20">
      {cards}
    </div>
  );
};
