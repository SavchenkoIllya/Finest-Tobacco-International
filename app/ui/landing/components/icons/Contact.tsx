import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export const Contact = ({
  imgProps,
}: {
  imgProps: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
}) => {
  return (
    <a>
      <img {...imgProps} />
    </a>
  );
};
