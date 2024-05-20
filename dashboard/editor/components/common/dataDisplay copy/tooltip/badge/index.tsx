import * as React from "react";
import Badge, { BadgeProps } from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MaterialUIICon from "@/dashboard/editor/components/Icon";
import ButtonWrapper from "../../../Inputs/Button";

// const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
//   '& .MuiBadge-badge': {
//     right: -3,
//     top: 13,
//     border: `2px solid ${theme.palette.background.paper}`,
//     padding: '0 4px',
//   },
// }));

export default function CustomizedBadges() {
  return (
    <ButtonWrapper aria-label="cart" iconButton>
      <Badge badgeContent={4} color="secondary">
        <MaterialUIICon name={"ShoppingCart"} />
      </Badge>
    </ButtonWrapper>
  );
}
