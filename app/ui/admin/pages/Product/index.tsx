import { ContentRenderer } from "@/app/ui/admin";
import { getProductsById } from "@/app/actions";
import { Product } from "@/app/db/types";

export async function ProductViewPage({ id }: { id?: number }) {
  if (!id) return null;

  const product = await getProductsById(id);

  return (
    <ContentRenderer<Product["select"]>
      title={"Top title"}
      data={product}
      items={[
        { key: "id", title: "ID", type: "string" },
        { key: "brand", title: "Brand", type: "string" },
        { key: "active", title: "Active", type: "boolean" },
      ]}
    />
  );
}
