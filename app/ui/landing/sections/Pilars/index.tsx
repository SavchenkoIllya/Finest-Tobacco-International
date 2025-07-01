import { InfoGrid } from "@/app/ui/landing/sections/About/components/InfoGrid";
import { SharedPillar } from "@/app/types";

export const PillarsSection = ({ pillars }: { pillars: SharedPillar[] }) => {
  return (
    <section className={"bg-primary py-10"}>
      <InfoGrid pillars={pillars} />
    </section>
  );
};
