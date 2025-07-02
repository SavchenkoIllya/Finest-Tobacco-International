"use client";
import { LandingSections } from "@/app/lib";
import { ContactsList, Input, Textarea } from "@/app/ui";
import { MapComponent } from "@/app/ui/landing/components/Map";
import { useActionState, useEffect } from "react";
import { sendEmail } from "@/app/actions/sendEmail";
import {
  SharedContact,
  SharedContactsSection,
  SharedMapLocation,
} from "@/app/types";
import { useGetSubscribers } from "@/app/hooks";

export const ContactsSection = ({
  contacts_content,
  location,
}: {
  contacts_content: SharedContactsSection;
  location?: SharedMapLocation | null;
}) => {
  const { query, data } = useGetSubscribers();
  const [formState, formAction, isPending] = useActionState(
    sendEmail,
    undefined,
  );

  useEffect(() => {
    query();
  }, []);

  return (
    <section
      id={LandingSections.CONTACTS}
      className={
        "relative container mx-auto flex flex-col justify-center items-center w-full"
      }
    >
      <h1 className={"h1 mt-8"}>{contacts_content.heading}</h1>

      <div className={"flex flex-col md:flex-row w-full max-w-6xl px-4"}>
        <div
          className={
            "w-full md:flex-grow border-accent border-b-2 md:border-r-2 md:border-b-0"
          }
        >
          <form action={formAction} className={"space-y-4 p-4 md:p-8"}>
            <div className={"flex flex-wrap items-center gap-2"}>
              {contacts_content?.form_inputs?.map((input) => {
                switch (input.type) {
                  case "field":
                    return (
                      <Input
                        key={input.id}
                        placeholder={input.placeholder}
                        variant={"black"}
                        onChange={() => {}}
                        type={"text"}
                        name={input.field_name}
                        error={formState?.errors?.[input.field_name]}
                        width={
                          input.field_name === "phone" ||
                          input.field_name === "name"
                            ? "lg:w-[49.3%]"
                            : undefined
                        }
                      />
                    );
                  case "textarea":
                    return (
                      <Textarea
                        key={input.id}
                        placeholder={input.placeholder}
                        inputProps={{
                          name: input.field_name,
                        }}
                        variant={"black"}
                        onChange={() => {}}
                        error={formState?.errors?.[input.field_name]}
                      />
                    );
                }
              })}
            </div>
            <input
              type={"hidden"}
              name={"receivers"}
              value={data?.map((receivers) => receivers.email) ?? []}
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
              {contacts_content.send_button}
            </button>
          </form>
        </div>

        <div
          className={
            "w-full mt-8 md:mt-0 md:w-auto md:ml-6 flex-shrink-0 flex justify-center"
          }
        >
          {location && <MapComponent location={location} />}
        </div>
      </div>
    </section>
  );
};
