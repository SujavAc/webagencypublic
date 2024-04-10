import * as React from "react";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import Tab from "@mui/material/Tab";
import TabPanel, { TabPanelProps } from "@mui/lab/TabPanel";
import { Tabs, TabsOwnProps, useTheme } from "@mui/material";

interface TabsComponent {
  defaultTab?: string;
  tab?: any[];
  tabsProps?: TabsOwnProps;
  tabPanel?: TabPanelProps[];
  tabComponentName?: string;
}

function a11yProps(index: number, orientation: string) {
  return {
    id: `${orientation}-tab-${index}`,
    "aria-controls": `${orientation}-tabpanel-${index}`,
  };
}

export default function TabsComponent(props: TabsComponent) {
  const { defaultTab, tab, tabPanel, tabComponentName, tabsProps } = props;
  const initialValue = defaultTab || (tab && tab[0].value);
  const theme = useTheme();
  const [value, setValue] = React.useState(initialValue);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        borderRadius: theme.shape.borderRadius,
        display: "flex",
        flexDirection:
          tabsProps?.orientation === "horizontal" ? "column" : "row",
      }}
    >
      <TabContext value={value}>
        <Tabs
          onChange={handleChange}
          value={value}
          {...tabsProps}
          sx={{
            ...(tabsProps?.orientation === "horizontal"
              ? { borderBottom: 1 }
              : { borderRight: 1 }),
            borderColor: "divider",
            width: tabsProps?.orientation === "horizontal" ? "100%" : "auto",
          }}
        >
          {tab &&
            tab.map((tab, i) => (
              <Tab
                key={i}
                id={`${tab?.orientation}-tab-${i}`}
                {...tab}
                {...a11yProps(tab?.value, tabsProps?.orientation)}
              />
            ))}
        </Tabs>
        {tabPanel &&
          tabPanel.map((tabP, i) => (
            <TabPanel
              key={i}
              {...tabP}
              sx={{
                padding: 2,
                width:
                  tabsProps?.orientation === "vertical"
                    ? "calc(100% - 191px)"
                    : "100%",
              }}
            >
              {tabP.children}
            </TabPanel>
          ))}
      </TabContext>
    </Box>
  );
}
