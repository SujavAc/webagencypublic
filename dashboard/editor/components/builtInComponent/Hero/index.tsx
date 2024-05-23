import Link from "next/link";
import PurifyText from "../../common/PurifyText";
import { HeroType } from "@/types/hero";
import { CommonContainerLayout } from "../../common/Layout/Container";
import { CommonBoxContainer } from "../../common/Layout/Box";
import { CommonTypographyComponenet } from "../../common/dataDisplay/Typography";
import CommonButtonWrapper from "../../common/Inputs/Button";
import CommonSvg from "../../common/dataDisplay/svg";

const Hero = (props: HeroType) => {
  const { id, title, description, buttons, bottomLeftSvg, rightTopSvg } = props;
  return (
    <>
      <CommonContainerLayout
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
        disableGutters
      >
        <CommonBoxContainer
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 2, sm: 3, md: 4 },
            maxWidth: 800,
            textAlign: "center",
            zIndex: 1,
          }}
        >
          {title && (
            <CommonTypographyComponenet variant="h2">
              {title}
            </CommonTypographyComponenet>
          )}
          {description && (
            <CommonTypographyComponenet
              variant="h5"
              component={"div"}
              color="grey"
            >
              <PurifyText text={description} />
            </CommonTypographyComponenet>
          )}
          <CommonBoxContainer
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: { xs: 1, sm: 2 },
            }}
          >
            {buttons &&
              buttons?.map((link, index) => (
                <CommonButtonWrapper
                  variant={index === 0 ? "contained" : "outlined"}
                  key={link?.label || index}
                  href={link?.href}
                  target={link?.openInNewTab || false}
                >
                  {link?.label}
                </CommonButtonWrapper>
              ))}
          </CommonBoxContainer>
        </CommonBoxContainer>
        <CommonSvg
          svgString={rightTopSvg}
          color="primary"
          viewBox="0 0 60 60"
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            height: "100%",
            width: "100%",
          }}
        />
        <CommonSvg
          svgString={bottomLeftSvg}
          color="primary"
          viewBox="0 0 60 60"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: "100%",
            width: "100%",
          }}
        />
      </CommonContainerLayout>
    </>
  );
};

export default Hero;
