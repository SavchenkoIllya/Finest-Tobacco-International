import { LandingSections } from "@/app/lib";
import { safeScroll } from "@/app/ui";

export const NavigationItem = ({
  onNavigate,
  label,
  section,
}: {
  section: keyof typeof LandingSections;
  label: string;
  onNavigate?: () => void;
}) => {
  return (
    <li>
      <button
        type="button"
        onClick={() => {
          safeScroll(section);
          onNavigate?.();
        }}
        className={"uppercase cursor-pointer "}
      >
        {label}
      </button>
    </li>
  );
};
