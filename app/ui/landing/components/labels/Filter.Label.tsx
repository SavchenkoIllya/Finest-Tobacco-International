"use client";
import { cn } from "@/app/ui";

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

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full bg-black px-4 py-1 text-white text-sm font-medium capitalize transition-all duration-200",
        value
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
      )}
    >
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
