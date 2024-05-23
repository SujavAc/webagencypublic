import Image, { ImageProps } from "next/image";

export const CommonImageComponent = (props: ImageProps) => {
  return <Image {...props} alt={props?.alt || "alt text"} />;
};
