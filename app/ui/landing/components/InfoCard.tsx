export type InfoCardProps = {
  title: string;
  label?: string;
};

export const InfoCard = ({ title, label }: InfoCardProps) => {
  return (
    <div
      className={`relative overflow-hidden flex flex-col items-center justify-center px-4 py-4 group h-full`}
    >
      <div className="relative flex flex-col gap-1 items-center justify-center text-center">
        <h3 className="h2 !text-3xl">{title}</h3>
        <p className="text-primary text-justify max-w-[250px]">{label}</p>
      </div>
    </div>
  );
};
