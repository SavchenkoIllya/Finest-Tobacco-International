"use client";
import { ReactNode } from "react";
import { cn } from "@/app/ui";

export const ContentWrapper = ({
  mainContent,
  containerClasses,
  title,
}: {
  mainContent: ReactNode;
  containerClasses?: string;
  title?: string;
}) => {
  return (
    <section
      className={cn(
        "container bg-white p-8 rounded-xl border-zinc-200 border-1 w-full m-auto",
        containerClasses,
      )}
    >
      {title && <h1 className={cn("my-2 font-bold text-4xl")}>{title}</h1>}
      {mainContent}
    </section>
  );
};
