import { ReactNode } from "react";

export interface NavbarProps {
  children: ReactNode;
  width?: string;
}

export const Navbar = ({ width = "64px", children }: NavbarProps) => {
  return (
    <div
      style={{
        width,
      }}
      className={
        "fixed bg-white border-r-1 border-zinc-200 h-full flex flex-col items-center p-8"
      }
    >
      {children}
    </div>
  );
};
