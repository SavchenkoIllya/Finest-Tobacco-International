"use client";
import { Filter, Menu, MenuFilterProps, Slider } from "@/app/ui";
import { useState } from "react";

export const SliderMenu = ({ menuFilters }: MenuFilterProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={"z-90"}>
      <Filter onClick={handleClick} />
      <Slider open={open}>
        <div className={"p-8"}>
          <Menu menuFilters={menuFilters} variant={"light"} />
        </div>
        <div className={"fixed w-full bottom-0 p-8"}>
          <button onClick={handleClick} className={"button bg-primary !w-full"}>
            Close
          </button>
        </div>
      </Slider>
    </div>
  );
};
