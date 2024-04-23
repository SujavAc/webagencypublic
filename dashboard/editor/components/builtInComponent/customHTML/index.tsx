import PurifyText from "../../common/PurifyText";

interface CustomHtmlProps {
  html?: string;
}

const CustomHtml = ({ html }: CustomHtmlProps) => {
  return <PurifyText text={html} />;
};

export default CustomHtml;
