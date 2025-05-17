"use client";
import { LandingSections } from "@/app/lib";
import { ContactsList, Input, Textarea } from "@/app/ui";
import { MapComponent } from "@/app/ui/landing/components/Map";

export const ContactsSection = () => {
  return (
    <section
      id={LandingSections.CONTACTS}
      className={"relative flex flex-col justify-center items-center w-full"}
    >
      <h1 className={"h1 mt-8"}>Contacts</h1>

      <div className={"flex flex-col md:flex-row w-full max-w-6xl px-4"}>
        <div
          className={
            "w-full md:flex-grow border-accent border-b-2 md:border-r-2 md:border-b-0"
          }
        >
          <form
            className={"space-y-4 p-4 md:p-8"}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className={"flex flex-col md:flex-row items-center gap-2"}>
              <Input
                placeholder={"Name"}
                variant={"black"}
                onChange={() => {}}
                type={"text"}
              />
              <Input
                placeholder={"Phone"}
                variant={"black"}
                type={"phone"}
                onChange={() => {}}
              />
            </div>
            <Input
              placeholder={"Email"}
              type={"email"}
              variant={"black"}
              onChange={() => {}}
            />
            <Textarea variant={"black"} onChange={() => {}} />
            <button
              type={"submit"}
              className={"button !w-full !bg-primary !text-secondary"}
            >
              Contact us
            </button>
          </form>
        </div>

        <div
          className={
            "w-full mt-8 md:mt-0 md:w-auto md:ml-6 flex-shrink-0 flex justify-center"
          }
        >
          <MapComponent />
        </div>
      </div>

      <div className={"my-8"}>
        <ContactsList
          wrapperClasses={"flex gap-8 items-center"}
          withSeparator
        />
      </div>

      <div className={"mb-8"}>
        <h5 className={"h1 uppercase !text-sm"}>
          Copyright © 24 All rights reserved - Finest Tobacco
        </h5>
      </div>
    </section>
  );
};
