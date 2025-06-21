import { RenderersSharedType } from "@/app/ui/admin/components/Overview/_generic/renderers/types";
import { ReactNode } from "react";

export interface ItemRendererProps
  extends Omit<RenderersSharedType<unknown>, "value"> {
  children: ReactNode;
}

export const ItemRenderer = ({ title, children, size }: ItemRendererProps) => {
  return (
    <div className={"flex flex-col gap-2"}>
      <h2 className={"text-bold text-lg text-zinc-700"}>{title}</h2>
      {children}
    </div>
  );
};
