import { ImageProps } from "next/image";
import ImageComponent from "../../Image";

export const CommonImageComponent = (props: ImageProps) => {
  return <ImageComponent {...props} alt={props?.alt || "alt text"} />;
};
