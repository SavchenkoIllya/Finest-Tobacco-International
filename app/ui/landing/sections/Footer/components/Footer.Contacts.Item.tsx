import { SharedContact } from "@/app/types";

export const FooterContactsItem = ({
  contact,
  style,
  full,
}: {
  contact: SharedContact;
  style?: string;
  full?: boolean;
}) => {
  const iconUrl =
    process.env.NODE_ENV === "development"
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${contact.icon?.url!}`
      : contact.icon?.url!;

  const wrapperStyles = "text-secondary flex justify-center gap-2";

  switch (contact.type) {
    case "email":
      return (
        <a href={`mailto:${contact.link}`} className={wrapperStyles}>
          <img alt={contact.name} src={iconUrl} className={style} />
          {full && contact.link}
        </a>
      );
    case "phone":
      return (
        <a href={`tel:${contact.link}`} className={wrapperStyles}>
          <img alt={contact.name} src={iconUrl} className={style} />
          <p>{full && contact.link}</p>
        </a>
      );
    case "whatsapp":
      return (
        <a
          href={`https://wa.me/${contact.link}`}
          target="_blank"
          className={wrapperStyles}
        >
          <img alt={contact.name} src={iconUrl} className={style} />
          <p>{full && contact.link}</p>
        </a>
      );
    default:
      return (
        <a href={contact.link} className={wrapperStyles}>
          <img alt={contact.name} src={iconUrl} className={style} />
          <p>{full && contact.link}</p>
        </a>
      );
  }
};
