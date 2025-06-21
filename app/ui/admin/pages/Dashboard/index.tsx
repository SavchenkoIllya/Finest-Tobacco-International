import { getProductsCount } from "@/app/actions";
import { DashboardInfoCard } from "./components";

export async function AdminDashboard() {
  const productsCount = await getProductsCount();

  return (
    <section className={"container"}>
      <div className={"flex gap-4"}>
        <DashboardInfoCard
          title={"You have"}
          icon={"MessageIcon"}
          subtitle={"Unread messages"}
          link={"MESSAGES"}
        />
        <DashboardInfoCard
          title={"You have"}
          icon={"CigaretteIcon"}
          subtitle={"Products"}
          iconBgColor={"bg-emerald-200"}
          iconColor={"fill-emerald-600"}
          link={"PRODUCTS"}
          count={productsCount}
        />
      </div>
    </section>
  );
}
