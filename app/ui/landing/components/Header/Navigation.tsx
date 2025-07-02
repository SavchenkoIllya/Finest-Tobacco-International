import { cn, NavigationItem } from "@/app/ui";
import { SharedNavItem } from "@/app/types";

export const Navigation = ({
  variant = "flex-row",
  onNavigate,
  navitems,
}: {
  variant?: "flex-row" | "flex-col";
  onNavigate?: () => void;
  navitems: SharedNavItem[];
}) => {
  return (
    <nav className={"uppercase"}>
      <ul className={cn("flex gap-4", variant)}>
        {navitems.map((item) => (
          <NavigationItem
            key={item.id}
            section={item.section_id}
            label={item.name}
            onNavigate={onNavigate}
          />
        ))}
      </ul>
    </nav>
  );
};
