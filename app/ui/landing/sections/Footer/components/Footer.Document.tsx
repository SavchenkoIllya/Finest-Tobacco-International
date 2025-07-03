import { Media } from "@/app/types";

export const FooterDocument = ({ document }: { document: Media }) => {
  const docUrl =
    process.env.NODE_ENV === "development"
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${document.url}`
      : document.url;

  const wrapperStyles = "text-secondary flex justify-center gap-2";

  return (
    <a
      href={docUrl}
      className={wrapperStyles}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        alt={document.name}
        src={"/icons/document.svg"}
        className={"invert"}
      />
      <p>{document.name.replace(document.ext, "")}</p>
    </a>
  );
};
