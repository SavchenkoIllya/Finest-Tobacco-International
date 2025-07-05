import { SharedFooter } from "@/app/types";
import { FooterContactsSection } from "@/app/ui/landing/sections/Footer/components";
import { FooterDocument } from "@/app/ui/landing/sections/Footer/components/Footer.Document";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export const FooterSection = ({
  footer_content,
}: {
  footer_content: SharedFooter;
}) => {
  console.log(footer_content);
  return (
    <section className={"bg-primary p-12 mt-12"}>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
          <p className={"font-bold mt-8 !text-secondary mb-4"}>
            {footer_content?.legal_info?.title}
          </p>
          <div className="text-secondary max-w-xs leading-6">
            {footer_content?.legal_info?.full_address && (
              <BlocksRenderer
                content={footer_content.legal_info.full_address}
              />
            )}
          </div>
        </div>

        <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
          <p className={"font-bold mt-8 !text-secondary mb-4"}>
            {footer_content?.contact_list?.title}
          </p>
          <FooterContactsSection
            contacts={footer_content.contact_list?.contacts}
            full
          />
        </div>

        <div className="w-full lg:w-1/3">
          <p className={"font-bold mt-8 !text-secondary mb-4"}>
            {footer_content?.document_list?.title}
          </p>
          <div className="flex flex-col space-x-4">
            <div className={"flex flex-col gap-2 items-start"}>
              {footer_content.document_list?.upload_items?.map((upload) => (
                <FooterDocument key={upload.id} upload={upload} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <p
        className={
          "font-bold mt-8 uppercase !text-secondary !text-sm !leading-4"
        }
      >
        {footer_content.copyrights}
      </p>
    </section>
  );
};
