import { cn, ContactIcon } from "@/app/ui";
import { SharedContact } from "@/app/types";

export const ContactsList = ({
  contacts,
  wrapperClasses = "flex gap-4",
}: {
  contacts?: SharedContact[] | null;
  wrapperClasses?: string;
}) => {
  if (!contacts) return null;

  return (
    <div className={cn(wrapperClasses)}>
      {contacts.map((contact) => (
        <ContactIcon key={contact.id} contact={contact} />
      ))}
    </div>
  );
};
