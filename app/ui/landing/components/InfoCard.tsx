
export type InfoCardProps = {
  title: string;
  label?: string;
}

export const InfoCard = ({title, label}:InfoCardProps) => {
  return (
    <div
      className={`relative overflow-hidden flex flex-col items-center justify-center px-4 py-4 group h-full`}
    >
      <div className="absolute inset-0 bg-gradient-to-tl from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>

      <div className="relative flex flex-col gap-1 items-center justify-center text-center">
        <h3 className="h2 !text-3xl">{title}</h3>
        <p className="text-primary text-justify max-w-[250px]">
          {label}
        </p>
      </div>
    </div>
  );
};
