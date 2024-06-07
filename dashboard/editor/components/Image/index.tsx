import Image, { ImageProps } from "next/image";
import blurdata from "@/public/blurData";

export default function ImageComponent(props: ImageProps) {
  const { height, width, fill, style, ...rest } = props;
  return (
    <div
      style={{
        width: "auto",
        height: "auto",
      }}
    >
      {fill ? (
        <Image
          alt={props?.alt || "alt text"}
          fill
          {...rest}
          placeholder="blur"
          blurDataURL={blurdata}
          style={{ ...style, height: "100%", width: "100%" }}
        />
      ) : (
        <Image
          alt={props?.alt || "alt text"}
          width={width || 300}
          height={height || 300}
          placeholder="blur"
          blurDataURL={blurdata}
          style={{ ...style, height: "100%", width: "100%" }}
          {...rest}
        />
      )}
    </div>
  );
}
