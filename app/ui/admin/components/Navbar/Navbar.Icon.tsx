"use client";
import { CustomSvg, IconName } from "@/app/ui";
import { Tooltip } from "@/app/ui/shared";
import Link from "next/link";

export interface NavbarIconProps {
  label: string;
  href: string;
  icon: IconName;
}

export const NavbarIcon = ({ label, href, icon }: NavbarIconProps) => {
  return (
    <Tooltip
      label={label}
      placement={"right"}
      bgColor={"bg-indigo-200"}
      textColor={"text-indigo-700"}
    >
      <Link
        className={
          "block p-3 bg-indigo-100 rounded-full relative cursor-pointer hover:bg-indigo-200 transition duration-200 ease-in-out"
        }
        href={href}
      >
        <CustomSvg
          iconName={icon}
          width={20}
          height={20}
          className={
            "fill-indigo-700 hover:fill-indigo-800 transition duration-200 ease-in-out"
          }
          viewBox={"0 0 15 15"}
        />
      </Link>
    </Tooltip>
  );
};
