import Image, { ImageProps } from "next/image";

export default function ImageComponent(props: ImageProps) {
  const { height, width, fill, ...rest } = props;
  return (
    <div style={{ width: "auto", height: "auto" }}>
      {fill ? (
        <Image {...rest} alt={props?.alt || "alt text"} fill />
      ) : (
        <Image
          {...rest}
          alt={props?.alt || "alt text"}
          layout="responsive"
          height={height || 500}
          width={width || 500}
        />
      )}
    </div>
  );
}
