"use client";
import DOMPurify from "dompurify";

interface PurifyTextProps {
  text?: string;
  id?: string;
}
export const CreateMarkup = (html: any) => {
  return {
    __html: DOMPurify.sanitize(html),
  };
};

export default function PurifyText(props: PurifyTextProps) {
  const { text, id } = props;
  if (!text) {
    return null;
  }
  return <div dangerouslySetInnerHTML={CreateMarkup(text)} id={id}></div>;
}
