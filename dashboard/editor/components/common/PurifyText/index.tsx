"use client";
import DOMPurify from "dompurify";

interface PurifyTextProps {
  text?: string;
  id?: string;
}
function CreateMarkup(html: any) {
  return {
    __html: DOMPurify.sanitize(html),
  };
}

export default function PurifyText(props: PurifyTextProps) {
  const { text, id } = props;
  if (!text) {
    return null;
  }
  return (
    <div
      dangerouslySetInnerHTML={CreateMarkup(text)}
      className="fill-current text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed"
      id={id}
    ></div>
  );
}
