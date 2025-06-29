"use client";
import { LandingSections } from "@/app/lib";
import { ContactsList, Input, Textarea } from "@/app/ui";
import { MapComponent } from "@/app/ui/landing/components/Map";
import { useActionState } from "react";
import { sendEmail } from "@/app/actions/sendEmail";

export const ContactsSection = () => {
  const [formState, formAction, isPending] = useActionState(
    sendEmail,
    undefined,
  );

  return (
    <section
      id={LandingSections.CONTACTS}
      className={
        "relative container mx-auto flex flex-col justify-center items-center w-full"
      }
    >
      <h1 className={"h1 mt-8"}>Contact us</h1>

      <div className={"flex flex-col md:flex-row w-full max-w-6xl px-4"}>
        <div
          className={
            "w-full md:flex-grow border-accent border-b-2 md:border-r-2 md:border-b-0"
          }
        >
          <form action={formAction} className={"space-y-4 p-4 md:p-8"}>
            <div className={"flex flex-col md:flex-row items-center gap-2"}>
              <Input
                placeholder={"Name"}
                variant={"black"}
                onChange={() => {}}
                type={"text"}
                name={"name"}
                error={formState?.errors?.["name"]}
              />
              <Input
                placeholder={"Phone"}
                variant={"black"}
                type={"phone"}
                onChange={() => {}}
                name={"phone"}
                error={formState?.errors?.["phone"]}
              />
            </div>
            <Input
              placeholder={"Email"}
              type={"email"}
              variant={"black"}
              onChange={() => {}}
              name={"email"}
              error={formState?.errors?.["email"]}
            />
            <Textarea
              inputProps={{
                name: "details",
              }}
              variant={"black"}
              onChange={() => {}}
              error={formState?.errors?.["details"]}
            />

            {formState?.errors?.["server"]?.map((error) => (
              <p key={"details-" + error} className={"text-red-500"}>
                {error}
              </p>
            ))}

            {formState?.successMessage && (
              <p className={"text-emerald-500"}>{formState?.successMessage}</p>
            )}

            <button
              type={"submit"}
              className={"button !w-full !bg-primary !text-secondary"}
              disabled={isPending}
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

      <div className="grid max-md:grid-cols-1 max-md: grid-cols-3 items-center m-8 w-[100%]">
        <div className="max-md:justify-self-center justify-self-start">
          <ContactsList
            wrapperClasses="flex gap-2 items-center"
            showFull={false}
          />
        </div>

        <h5 className="h1 uppercase !text-sm text-center justify-self-center">
          Copyright © 24 All rights reserved - Finest Tobacco
        </h5>

        <div></div>
      </div>
    </section>
  );
};
