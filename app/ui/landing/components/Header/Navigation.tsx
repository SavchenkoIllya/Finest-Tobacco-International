import { LandingSections } from "@/app/lib";
import { cn, NavigationItem } from "@/app/ui";

const SECTIONS_DICTIONARY: { [K in LandingSections]?: string } = {
  [LandingSections.ABOUT]: "About us",
  // [LandingSections.CATALOGUE]: "Catalogue",
  [LandingSections.CONTACTS]: "Contacts",
};

export const Navigation = ({
  variant = "flex-row",
  onNavigate,
}: {
  variant?: "flex-row" | "flex-col";
  onNavigate?: () => void;
}) => {
  return (
    <nav className={"uppercase"}>
      <ul className={cn("flex gap-4", variant)}>
        {Object.entries(SECTIONS_DICTIONARY).map(([section, label]) => (
          <NavigationItem
            key={section}
            section={section as keyof typeof LandingSections}
            label={label}
            onNavigate={onNavigate}
          />
        ))}
      </ul>
    </nav>
  );
};
