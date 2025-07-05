import { SharedContact, SharedFooter } from "@/app/types";
import { FooterContactsSection } from "@/app/ui/landing/sections/Footer/components";
import { FooterDocument } from "@/app/ui/landing/sections/Footer/components/Footer.Document";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

export const FooterSection = ({
  contacts,
  footer_content,
}: {
  contacts: SharedContact[];
  footer_content: SharedFooter;
}) => {
  return (
    <section className={"bg-primary p-12 mt-12"}>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
          <div className="text-secondary max-w-xs leading-6">
            <BlocksRenderer
              content={footer_content?.legal_info?.full_address ?? ""}
            />
          </div>
          {/*<p className="text-secondary max-w-xs leading-8">*/}
          {/*  {footer_content.full_address}*/}
          {/*</p>*/}
        </div>

        <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
          <FooterContactsSection contacts={contacts} full />
        </div>

        <div className="w-full lg:w-1/3">
          <div className="flex flex-col space-x-4">
            <div className={"flex flex-col gap-2 items-start"}>
              {/*{footer_content.privacy_legal && (*/}
              {/*  <FooterDocument document={footer_content.privacy_legal} />*/}
              {/*)}*/}
              {/*{footer_content.terms_conditions && (*/}
              {/*  <FooterDocument document={footer_content.terms_conditions} />*/}
              {/*)}*/}
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
