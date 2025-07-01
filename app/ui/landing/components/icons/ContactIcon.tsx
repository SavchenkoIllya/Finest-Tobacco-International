import { SharedContact } from "@/app/types";

export const ContactIcon = ({ contact }: { contact: SharedContact }) => {
  const iconUrl =
    process.env.NODE_ENV === "development"
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${contact.icon?.url!}`
      : contact.icon?.url!;

  const style = "invert";

  switch (contact.type) {
    case "email":
      return (
        <a href={`mailto:${contact.link}`}>
          <img alt={contact.name} src={iconUrl} className={style} />
        </a>
      );
    case "phone":
      return (
        <a href={`tel:${contact.link}`}>
          <img alt={contact.name} src={iconUrl} className={style} />
        </a>
      );
    case "whatsapp":
      return (
        <a href={contact.link}>
          <img alt={contact.name} src={iconUrl} className={style} />
        </a>
      );
  }
};
