"use client";
import DOMPurify from "dompurify";

interface PurifyTextProps {
  text?: string;
  trim?: number;
}
function CreateMarkup(html: any) {
  return {
    __html: DOMPurify.sanitize(html),
  };
}

export default function PurifyText(props: PurifyTextProps) {
  const { text } = props;
  if (!text) {
    return null;
  }
  return (
    <div
      dangerouslySetInnerHTML={CreateMarkup(text)}
      className="fill-current text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed"
    ></div>
  );
}
