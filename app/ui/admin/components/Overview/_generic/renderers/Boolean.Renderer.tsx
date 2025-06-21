import { RenderersSharedType } from "@/app/ui/admin/components/Overview/_generic/renderers/types";
import { ItemRenderer } from "@/app/ui/admin/components/Overview/_generic/renderers/Item.Renderer";

export const BooleanRenderer = ({
  value,
  title,
  size,
}: RenderersSharedType<boolean>) => {
  return (
    <ItemRenderer title={title} size={size}>
      {value ? (
        <p className={"text-green-500"}>&#10003;</p>
      ) : (
        <p className={"text-red-500"}>X</p>
      )}
    </ItemRenderer>
  );
};
