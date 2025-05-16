interface BackgroundImageProps {
  imageUrl: string;
  position?: {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
  };
  size?: {
    width?: string;
    height?: string;
  };
}

export const BackgroundImage = ({
  imageUrl,
  position = {},
  size = {},
}: BackgroundImageProps) => {
  return (
    <div
      className="hidden md:block absolute -z-10 bg-cover bg-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
        left: position.left,
        right: position.right,
        top: position.top,
        bottom: position.bottom,
        width: size.width ?? "500px",
        height: size.height ?? "1800px",
      }}
    />
  );
};
