import { cn } from "@/app/ui";
import { ReactNode } from "react";

export const Slider = ({
  children,
  open,
}: {
  children: ReactNode;
  open: boolean;
}) => {
  return (
    <div
      className={cn(
        "z-90 fixed inset-0 bg-secondary transition-all duration-300 ease-in-out",
        open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0",
      )}
    >
      {children}
    </div>
  );
};
