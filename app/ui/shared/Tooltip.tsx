import { cn } from "../utils";
import { ReactNode } from "react";

interface TooltipProps {
  label: string;
  children: ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  bgColor?: string;
  textColor?: string;
}

export const Tooltip = ({
  label,
  children,
  placement = "top",
  bgColor = "bg-accent",
  textColor = "text-white",
}: TooltipProps) => {
  return (
    <div className="relative group inline-block">
      {children}
      <div
        className={cn(
          "absolute z-10 px-2 py-1 rounded text-sm font-semibold whitespace-nowrap transition-opacity duration-200 opacity-0 group-hover:opacity-100 pointer-events-none",
          textColor,
          bgColor,
          tooltipPositionClasses[placement],
        )}
      >
        {label}
      </div>
    </div>
  );
};

const tooltipPositionClasses: Record<string, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-4",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-4",
  left: "right-full top-1/2 -translate-y-1/2 mr-4",
  right: "left-full top-1/2 -translate-y-1/2 ml-4",
};
