import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton, {
  ListItemButtonProps,
} from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import MaterialUIIcon from "../../../Icon";
import { Menu } from "@/types/menu";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { UserType, useUserAuth } from "@/database/authentication/authContext";

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

  const usePathName = usePathname();

  const { user, logOut } = useUserAuth();
  const isAdminUser = user.uid && user.userRole === UserType.ADMIN;

  const handleClick = (index: number | string) => {
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
      {path ? (
        <NextLink href={path || "#"} passHref>
          <ListItemButton
            component={"div"}
            onClick={() => handleClick(index)}
            target={newTab ? "_blank" : "_self"}
            tabIndex={-1}
            selected={usePathName === `${path}/`}
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
      ) : (
        <ListItemButton
          component="a"
          onClick={() => handleClick(index)}
          target={newTab ? "_blank" : "_self"}
          selected={usePathName === `${path}/`}
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
      )}

      {submenu && submenu.length > 0 && (
        <Collapse in={openItems[index]} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 1 }}>
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
      {items?.map((item, index) => (
        <div key={index}>
          {item?.isAuthenticated ? (
            <>{isAdminUser ? <EachListItem {...item} index={index} /> : null}</>
          ) : (
            <EachListItem {...item} index={index} />
          )}
        </div>
      ))}
    </List>
  );
};

export default NestedList;
