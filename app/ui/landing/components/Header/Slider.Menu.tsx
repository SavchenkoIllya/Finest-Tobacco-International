"use client";
import { Burger, ContactsList, Navigation, Slider } from "@/app/ui";
import { useState } from "react";

export const SliderNavigation = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={"block md:hidden"}>
      <Burger open={open} onClick={handleClick} />
      <Slider open={open}>
        <div className={"p-8"}>
          <Burger open={open} onClick={handleClick} />
          <div className="flex flex-col p-4 gap-20">
            <Navigation onNavigate={handleClick} variant="flex-col" />
            <ContactsList wrapperClasses={"flex flex-col gap-4"} />
          </div>
        </div>
      </Slider>
    </div>
  );
};
