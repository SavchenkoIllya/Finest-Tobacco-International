"use client";
import { Filter, Menu, Slider } from "@/app/ui";
import { useState } from "react";

export const SliderMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Filter onClick={handleClick} />
      <Slider open={open}>
        <div className={"p-8"}>{<Menu variant={"light"} />}</div>
        <div className={"fixed w-full bottom-0 p-8"}>
          <button
            onClick={handleClick}
            className={"button bg-primary !text-secondary !w-full"}
          >
            Х
          </button>
        </div>
      </Slider>
    </div>
  );
};
