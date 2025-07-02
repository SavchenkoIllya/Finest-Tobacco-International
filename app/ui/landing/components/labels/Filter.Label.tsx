"use client";
import { useUrlParams } from "@/app/ui";

export const FilterLabel = ({
  title,
  value,
  onRemove,
}: {
  title: string;
  onRemove: () => void;
  value?: string;
}) => {
  const handleRemove = () => {
    onRemove();
  };

  if (!value) return null;

  return (
    <div className="flex items-center gap-2 rounded-full bg-black px-4 py-1 text-white text-sm font-medium capitalize">
      <span>
        {title.replaceAll("_", " ")}: {value}
      </span>
      <button
        onClick={handleRemove}
        className={
          "hover:opacity-80 transition py-0.5 px-1 bg-primary/20 hover:bg-primary/40 rounded-full cursor-pointer"
        }
        aria-label={`Remove ${title}`}
      >
        X
      </button>
    </div>
  );
};
