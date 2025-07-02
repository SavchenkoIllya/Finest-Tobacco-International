import { safeScroll } from "@/app/ui";
import { SharedNavItem } from "@/app/types";

export const NavigationItem = ({
  onNavigate,
  label,
  section,
}: {
  section: SharedNavItem["section_id"];
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
