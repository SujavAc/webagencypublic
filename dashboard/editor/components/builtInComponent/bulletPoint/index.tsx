"use client";
import MaterialUIICon, { MaterialUIIConProps } from "../../Icon";
import { CommonBoxContainer } from "../../common/Layout/Box";
import { CommonTypographyComponenet } from "../../common/dataDisplay/Typography";

export interface BulletListProps {
  id?: string;
  className?: string;
  iconProps: MaterialUIIConProps;
  text: string;
}

export const BulletList = (props: BulletListProps) => {
  const { id, className, text, iconProps } = props;
  return (
    <CommonBoxContainer
      sx={{
        mb: { xs: 1, sm: 2 },
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: { xs: 1, sm: 2 },
      }}
      id={id}
      className={className}
    >
      <MaterialUIICon {...iconProps} />
      <CommonTypographyComponenet
        variant="body1"
        component={"p"}
        flexWrap={"wrap"}
      >
        {text}
      </CommonTypographyComponenet>
    </CommonBoxContainer>
  );
};
