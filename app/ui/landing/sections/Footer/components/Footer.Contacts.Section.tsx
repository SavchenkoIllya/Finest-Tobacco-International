import { SharedContact } from "@/app/types";
import { FooterContactsItem } from "@/app/ui/landing/sections/Footer/components/Footer.Contacts.Item";

export const FooterContactsSection = ({
  contacts,
  full,
}: {
  contacts: SharedContact[];
  full?: boolean;
}) => {
  return (
    <div className={"flex flex-col items-start"}>
      {contacts.map((contact) => (
        <FooterContactsItem key={contact.id} contact={contact} full={full} />
      ))}
    </div>
  );
};
