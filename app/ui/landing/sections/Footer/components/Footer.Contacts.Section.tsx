import { FooterContactsItem } from "@/app/ui/landing/sections/Footer/components/Footer.Contacts.Item";
import { Contact } from "@/app/types";

export const FooterContactsSection = ({
  contacts,
  full,
}: {
  contacts?: Contact[] | null;
  full?: boolean;
}) => {
  if (!contacts) return null;

  return (
    <div className={"flex flex-col gap-2 items-start"}>
      {contacts.map((contact) => (
        <FooterContactsItem key={contact.id} contact={contact} full={full} />
      ))}
    </div>
  );
};
