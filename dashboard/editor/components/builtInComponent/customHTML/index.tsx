import PurifyText from "../../common/PurifyText";

interface CustomHtmlProps {
  html?: string;
  id?: string;
}

const CustomHtml = ({ html, id }: CustomHtmlProps) => {
  return <PurifyText text={html} id={id} />;
};

export default CustomHtml;
