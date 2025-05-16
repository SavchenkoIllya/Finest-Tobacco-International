import { ProductsWithLocales } from "@/app/db/types";
import { FRONTEND_ADMIN_PATHS } from "@/app/lib";
import Link from "next/link";

export const LinkProduct = ({
  id,
}: {
  id?: ProductsWithLocales["select"]["id"];
}) => {
  if (!id) return null;

  return (
    <Link
      className={"cursor-pointer hover:underline text-blue-600"}
      href={`${FRONTEND_ADMIN_PATHS.PRODUCTS}/${id}`}
    >
      {id}
    </Link>
  );
};
