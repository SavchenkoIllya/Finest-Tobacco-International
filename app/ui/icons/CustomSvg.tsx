import { IconName } from "./index";
import { SVGProps } from "react";
import * as Icons from "./IconsList";

export const CustomSvg = ({
  iconName,
  width = "15",
  height = "15",
  ...props
}: { iconName: IconName } & SVGProps<SVGSVGElement>) => {
  const IconComponent = Icons[iconName] ?? null;

  return (
    <svg {...props} height={height} width={width}>
      <IconComponent />
    </svg>
  );
};
