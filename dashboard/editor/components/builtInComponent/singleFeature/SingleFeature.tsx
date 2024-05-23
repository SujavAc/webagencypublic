import { Feature } from "@/types/feature";
import PurifyText from "../../common/PurifyText";
import CommonPaperWrapper from "../../common/Layout/Paper";
import CommonSvg from "../../common/dataDisplay/svg";
import { CommonTypographyComponenet } from "../../common/dataDisplay/Typography";

const SingleFeature = (feature: Feature) => {
  const { id, icon, title, paragraph } = feature;
  return (
    <CommonPaperWrapper
      id={id}
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 1, sm: 2 },
        alignItems: "flex-start",
        p: { xs: 1, sm: 2 },
      }}
    >
      {icon && (
        <CommonPaperWrapper
          variant="outlined"
          square={false}
          sx={{
            height: 70,
            width: 70,
            borderRadius: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CommonSvg
            svgString={icon}
            color="primary"
            viewBox="0 0 60 60"
            sx={{ height: 40, width: 40 }}
          />
        </CommonPaperWrapper>
      )}
      {title && (
        <CommonTypographyComponenet variant="h5">
          {title}
        </CommonTypographyComponenet>
      )}
      {paragraph && (
        <CommonTypographyComponenet variant="body2" component={"div"}>
          <PurifyText text={paragraph} />
        </CommonTypographyComponenet>
      )}
    </CommonPaperWrapper>
  );
};

export default SingleFeature;
