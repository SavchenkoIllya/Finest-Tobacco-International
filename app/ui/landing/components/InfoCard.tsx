export type InfoCardProps = {
  title: string;
  label?: string;
};

export const InfoCard = ({ title, label }: InfoCardProps) => {
  return (
    <div
      className={`relative overflow-hidden flex flex-col items-center justify-center px-4 py-4 group h-full`}
    >
      <div className="flex flex-col gap-1 mb-10">
        <h3 className="h2 text-secondary! !text-3xl">{title}</h3>
        <p className="text-secondary max-w-[250px]">{label}</p>
      </div>
    </div>
  );
};
