import Image, { ImageProps } from "next/image";

export default function ImageComponent(props: ImageProps) {
  return (
    <div style={{ width: "auto", height: "auto" }}>
      <Image {...props} alt={props?.alt || "alt text"} layout="responsive" />
    </div>
  );
}
