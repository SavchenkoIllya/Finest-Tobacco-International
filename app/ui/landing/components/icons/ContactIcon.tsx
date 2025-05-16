import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export const ContactIcon = ({
  imgProps,
}: {
  imgProps: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
}) => {
  return <img {...imgProps} />;
};
