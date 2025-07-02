"use client";
import { Burger, ContactsList, Navigation, Slider } from "@/app/ui";
import { useState } from "react";
import { SharedContact, SharedNavItem } from "@/app/types";

export const SliderNavigation = ({
  navitems,
  contacts,
}: {
  navitems: SharedNavItem[];
  contacts: SharedContact[];
}) => {
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
            <Navigation
              onNavigate={handleClick}
              variant="flex-col"
              navitems={navitems}
            />
            <ContactsList
              wrapperClasses={"flex flex-row gap-4"}
              contacts={contacts}
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};
