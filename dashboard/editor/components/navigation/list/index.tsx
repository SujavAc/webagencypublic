import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton, {
  ListItemButtonProps,
} from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import MaterialUIIcon from "../../Icon";
import { Menu } from "@/types/menu";
import NextLink from "next/link";

interface INestedList {
  heading?: string;
  items: Menu[];
  listButtonProps?: ListItemButtonProps;
}

const NestedList: React.FC<INestedList> = ({
  heading,
  items,
  listButtonProps,
}) => {
  const [openItems, setOpenItems] = React.useState<{ [key: string]: boolean }>(
    {}
  );

  const handleClick = (index: number) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const EachListItem: React.FC<Menu & { index: string | number }> = ({
    title,
    path,
    newTab,
    icon,
    submenu,
    index,
  }) => (
    <>
      <NextLink href={path || "#"} passHref>
        <ListItemButton
          component="a"
          target={newTab ? "_blank" : "_self"}
          {...listButtonProps}
        >
          {icon && (
            <ListItemIcon>
              <MaterialUIIcon name={icon} />
            </ListItemIcon>
          )}
          <ListItemText primary={title} />
          {submenu?.length > 0 &&
            (openItems[index] ? (
              <MaterialUIIcon name={"ExpandLess"} />
            ) : (
              <MaterialUIIcon name={"ExpandMore"} />
            ))}
        </ListItemButton>
      </NextLink>
      {submenu && submenu.length > 0 && (
        <Collapse in={openItems[index]} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {submenu.map((subItem, subIndex) => (
              <EachListItem
                key={subIndex}
                {...subItem}
                index={`${index}-${subIndex}`}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        heading ? (
          <ListSubheader component="div" id="nested-list-subheader">
            {heading}
          </ListSubheader>
        ) : null
      }
    >
      {items.map((item, index) => (
        <div key={index}>
          <EachListItem {...item} index={index} />
        </div>
      ))}
    </List>
  );
};

export default NestedList;
