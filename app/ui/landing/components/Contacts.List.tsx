import { cn, ContactIcon } from "@/app/ui";

// TODO: get from DB
export const ContactsList = ({
  wrapperClasses = "flex gap-4",
  showFull = true,
  withSeparator = false,
}: {
  wrapperClasses?: string;
  showFull?: boolean;
  withSeparator?: boolean;
}) => {
  return (
    <div className={cn(wrapperClasses)}>
      <a href="tel:+971551047196" className={"flex gap-2 cursor-pointer"}>
        <ContactIcon
          imgProps={{
            src: "/icons/whatsapp.svg",
            alt: "Whatsapp icon",
            className: "invert",
          }}
        />
        <ContactIcon
          imgProps={{
            src: "/icons/phone.svg",
            alt: "Phone icon",
            className: "invert",
          }}
        />
        {showFull && "+971551047196"}
      </a>
      {withSeparator && <div className={"w-0.5 h-8 bg-accent"} />}
      <a
        href={"mailto:info@finest-tobacco.com"}
        className={"flex gap-2 cursor-pointer"}
      >
        <ContactIcon
          imgProps={{
            src: "/icons/mail.svg",
            alt: "Email icon",
            className: "invert",
          }}
        />
        {showFull && " info@finest-tobacco.com"}
      </a>
    </div>
  );
};
