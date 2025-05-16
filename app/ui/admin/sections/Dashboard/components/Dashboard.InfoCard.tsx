"use client";
import { FRONTEND_ADMIN_PATHS } from "@/app/lib";
import { cn, CustomSvg, IconName } from "@/app/ui";
import { useRouter } from "next/navigation";

interface DashboardInfoCardProps {
  title: string;
  icon?: IconName;
  subtitle?: string;
  link?: keyof typeof FRONTEND_ADMIN_PATHS;
  iconColor?: string;
  iconBgColor?: string;
  count?: number;
}

export const DashboardInfoCard = ({
  icon,
  title,
  subtitle,
  link,
  iconColor = "stroke-rose-400",
  iconBgColor = "bg-rose-200",
  count,
}: DashboardInfoCardProps) => {
  const router = useRouter();
  const Component = link ? "a" : "div";

  return (
    <Component
      className={cn(
        "rounded-3xl bg-white border-1 border-zinc-200 min-w-[200px] w-fit p-8 flex gap-8 justify-center items-center",
        link &&
          "cursor-pointer hover:bg-white/60 hover:border-zinc-300 transition duration-200",
      )}
      onClick={() => (link ? router.push(FRONTEND_ADMIN_PATHS[link]) : null)}
    >
      {icon && (
        <div className={cn("p-4 rounded-3xl ", iconBgColor)}>
          <CustomSvg
            iconName={icon}
            className={cn("fill-transparent stroke-2 size-10", iconColor)}
            viewBox={"0 0 20 17"}
          />
        </div>
      )}
      <div className={"text-left"}>
        <p className={"font-bold text-xl"}>{title}</p>
        <p>{subtitle}</p>
      </div>
      <div>
        <p className={"text-[48px] font-bold"}>{count}</p>
      </div>
    </Component>
  );
};
