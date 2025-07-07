import { UploadItem } from "@/app/types";

export const FooterDocument = ({ upload }: { upload: UploadItem }) => {
  const docUrl =
    process.env.NODE_ENV === "development"
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${upload.document?.url}`
      : upload.document?.url;

  const wrapperStyles = "text-secondary flex justify-center gap-2";

  console.log(docUrl)

  return (
    <a
      href={docUrl}
      className={wrapperStyles}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        alt={upload.title}
        src={"/icons/document.svg"}
        className={"invert"}
      />
      <p>{upload.title}</p>
    </a>
  );
};
