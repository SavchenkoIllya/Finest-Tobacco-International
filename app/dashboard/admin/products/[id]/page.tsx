import { ProductViewPage } from "@/app/ui/admin";

export type AdminProductId = {
  params: Promise<{ id: number }>;
};

export default async function AdminProductId({ params }: AdminProductId) {
  const awaitedParams = await params;

  return <ProductViewPage id={awaitedParams.id} />;
}
