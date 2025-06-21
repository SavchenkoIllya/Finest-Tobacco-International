import { RenderersSharedType } from "@/app/ui/admin/components/Overview/_generic/renderers/types";
import { ItemRenderer } from "@/app/ui/admin/components/Overview/_generic/renderers/Item.Renderer";

export const StringRenderer = ({
  value,
  title,
  size,
}: RenderersSharedType<string>) => {
  return (
    <ItemRenderer title={title} size={size}>
      <p>{value}</p>
    </ItemRenderer>
  );
};
