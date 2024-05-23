import { CommonBoxContainer } from "../../common/Layout/Box";
import PurifyText from "../../common/PurifyText";
import { CommonTypographyComponenet } from "../../common/dataDisplay/Typography";

const SectionTitleComponent = ({
  title,
  paragraph,
  width = "570px",
  align,
  mb = "50px",
  id,
}: {
  title: string;
  paragraph?: string;
  width?: string;
  align?: string | any;
  mb?: string;
  id?: string;
}) => {
  return (
    <CommonBoxContainer
      id={id}
      textAlign={align || "left"}
      sx={{ mb, maxWidth: width }}
    >
      {title && (
        <CommonTypographyComponenet variant="h2">
          {title}
        </CommonTypographyComponenet>
      )}
      {paragraph && (
        <CommonTypographyComponenet variant="h6" component={"div"}>
          <PurifyText text={paragraph} />
        </CommonTypographyComponenet>
      )}
    </CommonBoxContainer>
  );
};

export default SectionTitleComponent;
