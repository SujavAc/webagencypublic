import Image from "next/image";
import Link from "next/link";
import PurifyText from "../../common/PurifyText";
import { CommonContainerLayout } from "../../common/Layout/Container";
import CommonPaperWrapper from "../../common/Layout/Paper";
import { CommonGridContainer } from "../../common/Layout/Grid";
import { CommonGridItem } from "../../common/Layout/Grid/gridItem";
import { CommonTypographyComponenet } from "../../common/dataDisplay/Typography";
import CommonLink from "../../common/Navigation/link";
import { Divider } from "@mui/material";

interface FooterProps {
  id: string;
  paragraph: string;
  companyName: string;
  logoImageUrl?: string;
  logoImageSvg?: string;
  links: LinkColumn[];
}

interface LinkColumn {
  title: string;
  menuData: Menu[];
}

interface Menu {
  label: string;
  href?: string;
  newTab: boolean;
}

const Footer = (props: FooterProps) => {
  const { id, paragraph, links, logoImageUrl, companyName, logoImageSvg } =
    props;

  return (
    <footer id={id}>
      <CommonPaperWrapper elevation={0}>
        <CommonContainerLayout disableGutters maxWidth={false}>
          <CommonGridContainer
            flexWrap={"wrap"}
            justifyContent={"center"}
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <CommonGridItem
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, sm: 3 },
              }}
              xs={12}
              sm={4}
              md={3}
            >
              {logoImageSvg && (
                <Link href="/">
                  <PurifyText text={logoImageSvg} />
                </Link>
              )}
              {logoImageUrl && (
                <CommonLink href="/">
                  <Image
                    src={logoImageUrl || "/images/logo/logo-2.svg"}
                    alt="logo"
                    width={50}
                    height={50}
                  />
                </CommonLink>
              )}
              {paragraph && (
                <CommonTypographyComponenet variant="body2" gutterBottom>
                  {" "}
                  {paragraph}
                </CommonTypographyComponenet>
              )}
            </CommonGridItem>
            {links &&
              links?.map((link, index) => (
                <CommonGridItem key={index} xs={12} sm={4} md={3}>
                  <CommonTypographyComponenet variant="h5" sx={{ pb: 1 }}>
                    {link?.title}
                  </CommonTypographyComponenet>
                  {link?.menuData?.map((linkData, idx) => (
                    <CommonLink
                      href={linkData?.href}
                      key={linkData?.label || idx}
                    >
                      <CommonTypographyComponenet variant="body1" gutterBottom>
                        {linkData?.label}
                      </CommonTypographyComponenet>
                    </CommonLink>
                  ))}
                </CommonGridItem>
              ))}
            <CommonGridItem flexGrow={1} xs={12}>
              <Divider />
            </CommonGridItem>
            <CommonGridItem flexGrow={1} xs={12}>
              <CommonTypographyComponenet
                variant="body1"
                gutterBottom
                textAlign="center"
              >
                © {new Date().getFullYear()}, {companyName}, All Rights
                Reserved{" "}
              </CommonTypographyComponenet>
            </CommonGridItem>
          </CommonGridContainer>
        </CommonContainerLayout>
      </CommonPaperWrapper>
    </footer>
  );
};

export default Footer;
