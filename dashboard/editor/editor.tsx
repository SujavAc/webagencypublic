"use client";
import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";
import Hero from "@/components/Hero";
import SectionTitleComponent from "@/components/Common/SectionTitle";
import SingleFeature from "@/components/Features/SingleFeature";
import Video from "@/components/Video";
import PaperWrapper from "./components/layout/Paper";
import StackLayout from "./components/layout/Stack";
import TabsComponent from "./components/layout/Tab";
import ContainerLayout from "./components/layout/Container";
import GridLayout from "./components/layout/Grid";
import MenuComponent from "./components/navigation/menu";
import { MenuConfig } from "./components/navigation/menu/menuConfig";
import MaterialUIICon from "./components/Icon";
import { IconConfig } from "./components/Icon/iconConfig";
import Links from "./components/navigation/link";
import { LinkConfig } from "./components/navigation/link/linkConfig";
import Tooltips from "./components/dataDisplay/tooltip";
import { ToolTipConfig } from "./components/dataDisplay/tooltip/tooltipConfig";
import TypographyComponenet from "./components/dataDisplay/typography";
import { TypographyConfig } from "./components/dataDisplay/typography/typographyConfig";
import DividerComponent from "./components/dataDisplay/divider";
import { DividerConfig } from "./components/dataDisplay/divider/dividerConfig";
import { useState } from "react";
import ButtonComponent from "@/components/Common/Button";
import { Preview } from "./preview";
import { Box } from "@mui/material";
import { getQueryParameter } from "@/utils/editor/urlParameter";
import { useRouter } from "next/navigation";
import { puckEditorConfig } from "./config";
import { overrides } from "./overrides";

interface EditorProps {
  updateData: (uData: any) => void;
  iData: any;
}

const Editor = (props: EditorProps) => {
  const { updateData, iData } = props;
  // Describe the initial data
  const initialData = {
    content: [],
    root: {
      title: getQueryParameter("pageName") || "",
    },
  };
  const [preview, setPreview] = useState(false);
  const [editor, setEditor] = useState(true);
  const [data, setData] = useState(iData || initialData);
  const [previewData, setPreviewData] = useState(iData || initialData);

  const router = useRouter();

  // Create Puck component config
  //   const config = {
  //     categories: {
  //       Layout: {
  //         components: ["Container", "GridLayout", "PaperWrapper", "StackLayout"],
  //         defaultExpanded: false, // Collapse this category by default
  //       },
  //       Content: {
  //         components: ["Hero", "SectionTitle", "Feature", "Video", "Icon"],
  //         defaultExpanded: false, // Collapse this category by default
  //       },
  //       Navigation: {
  //         components: ["Menu", "Link"],
  //         defaultExpanded: true, // Collapse this category by default
  //       },
  //       DataDisplay: {
  //         components: ["Tooltip", "Typography", "Divider"],
  //         defaultExpanded: true, // Collapse this category by default
  //       },
  //     },
  //     components: {
  //       PaperWrapper: {
  //         label: "Paper Container",
  //         fields: {
  //           sx: {
  //             type: "object",
  //             objectFields: {
  //               ...flex,
  //             },
  //           },
  //           elevation: { type: "number" },
  //           square: {
  //             type: "radio",
  //             options: [
  //               { label: "False", value: false },
  //               { label: "True", value: true },
  //             ],
  //           },
  //           variant: {
  //             type: "select",
  //             options: [
  //               { label: "Elevation", value: "elevation" },
  //               { label: "Outlined", value: "outlined" },
  //               { label: "String", value: "string" },
  //             ],
  //           },
  //         },
  //         render: ({ sx, ...rest }) => {
  //           return <PaperWrapper sx={sx} {...rest} />;
  //         },
  //       },
  //       GridLayout: {
  //         label: "Grid Container",
  //         fields: {
  //           noOfItems: {
  //             type: "array",
  //             arrayFields: {
  //               title: { type: "text" },
  //             },
  //             min: 1,
  //             max: 5,
  //           },
  //           columnSpacing: { type: "number" },
  //           rowSpacing: { type: "number" },
  //           spacing: { type: "number" },
  //           wrap: flex.flexWrap,
  //           item: {
  //             type: "radio",
  //             options: [
  //               { label: "False", value: false },
  //               { label: "True", value: true },
  //             ],
  //           },
  //           container: {
  //             type: "radio",
  //             options: [
  //               { label: "False", value: false },
  //               { label: "True", value: true },
  //             ],
  //           },
  //           sx: {
  //             type: "object",
  //             objectFields: {
  //               ...flex,
  //             },
  //           },
  //         },
  //         render: ({ noOfItems, ...rest }) => {
  //           return <GridLayout noOfItems={noOfItems} {...rest} />;
  //         },
  //       },
  //       Container: {
  //         label: "Container",
  //         fields: {
  //           fixed: {
  //             type: "radio",
  //             options: [
  //               { label: "False", value: false },
  //               { label: "True", value: true },
  //             ],
  //           },

  //           maxWidth: {
  //             type: "select",
  //             options: [
  //               { label: "XS", value: "xs" },
  //               { label: "SM", value: "sm" },
  //               { label: "MD", value: "md" },
  //               { label: "LG", value: "lg" },
  //               { label: "XL", value: "xl" },
  //               { label: "None", value: false },
  //             ],
  //           },
  //           disableGutters: {
  //             type: "radio",
  //             options: [
  //               { label: "False", value: false },
  //               { label: "True", value: true },
  //             ],
  //           },
  //           sx: {
  //             type: "object",
  //             objectFields: {
  //               ...flex,
  //             },
  //           },
  //         },
  //         render: (fields) => {
  //           return <ContainerLayout {...fields} />;
  //         },
  //       },
  //       // Tabs: {
  //       //   label: "Tab Container",
  //       //   fields: {
  //       //     defaultTab: { type: "text" },
  //       //     tabComponentName: { type: "text" },
  //       //     tab: {
  //       //       type: 'array',
  //       //       arrayFields: {
  //       //         label: { type: "text" },
  //       //         value: { type: "text" },
  //       //         disabled: {
  //       //           type: "radio",
  //       //           options: [
  //       //             { label: "False", value: false },
  //       //             { label: "True", value: true },
  //       //           ],
  //       //         },
  //       //       },
  //       //     },
  //       //     tabsProps: {
  //       //       type: 'object',
  //       //       objectFields: {
  //       //         orientation: {
  //       //           type: 'select',
  //       //           options: [
  //       //             { label: "Horizontal", value: "horizontal" },
  //       //             { label: "Vertical", value: "vertical" },
  //       //           ],
  //       //         },
  //       //         variant: {
  //       //           type: 'select',
  //       //           options: [
  //       //             { label: "Scrollable", value: "scrollable" },
  //       //             { label: "Full Width", value: "fullWidth" },
  //       //             { label: "Standard", value: "standard" },

  //       //           ],
  //       //         }
  //       //       }
  //       //     },
  //       //     tabPanel: {
  //       //       type: 'array',
  //       //       arrayFields: {
  //       //         value: { type: "text" }
  //       //       },
  //       //     },
  //       //     sx: {
  //       //       type: "object",
  //       //       objectFields: {
  //       //         ...flex,
  //       //       },
  //       //     },
  //       //   },
  //       //   render: (fields) => {
  //       //     return <TabsComponent {...fields} />;
  //       //   },
  //       // },
  //       StackLayout: {
  //         label: "Stack Container",
  //         fields: {
  //           noOfItems: {
  //             type: "array",
  //             arrayFields: {
  //               title: { type: "text" },
  //             },
  //             min: 1,
  //             max: 5,
  //           },
  //           stackProps: {
  //             type: "object",
  //             objectFields: {
  //               direction: {
  //                 ...flex.flexDirection,
  //               },
  //               alignItems: flex.alignItems,
  //               justifyContent: flex.justifyContent,
  //               spacing: {
  //                 type: "number",
  //               },
  //               sx: {
  //                 type: "object",
  //                 objectFields: {
  //                   ...flex,
  //                 },
  //               },
  //             },
  //           },
  //         },
  //         render: ({ noOfItems, stackProps }) => {
  //           return <StackLayout stackProps={stackProps} noOfItems={noOfItems} />;
  //         },
  //       },

  //       // navigation
  //       Menu: {
  //         label: "Menu Component",
  //         fields: {
  //           ...MenuConfig,
  //         },
  //         render: (fields) => {
  //           return <MenuComponent {...fields} />;
  //         },
  //       },
  //       Link: {
  //         fields: {
  //           ...LinkConfig,
  //         },
  //         render: (fields) => {
  //           return <Links {...fields} />;
  //         },
  //       },

  //       // Content
  //       HeadingBlock: {
  //         fields: {
  //           children: {
  //             type: "text",
  //           },
  //         },
  //         render: ({ children }) => {
  //           return <h1>{children}</h1>;
  //         },
  //       },
  //       Hero: {
  //         label: "Hero Component",
  //         fields: {
  //           title: {
  //             type: "text",
  //           },
  //           description: {
  //             type: "textarea",
  //           },
  //           bottomLeftSvg: {
  //             type: "textarea",
  //           },
  //           rightTopSvg: {
  //             type: "textarea",
  //           },
  //           buttons: {
  //             type: "array",
  //             arrayFields: {
  //               label: { type: "text" },
  //               href: { type: "text" },
  //               openInNewTab: {
  //                 type: "radio",
  //                 options: [
  //                   { label: "False", value: false },
  //                   { label: "True", value: true },
  //                 ],
  //               },
  //             },
  //             defaultItemProps: {
  //               href: "",
  //               label: "",
  //               openInNewTab: false,
  //             },
  //             min: 1,
  //             max: 2,
  //           },
  //         },
  //         render: (fields) => {
  //           return <Hero {...fields} />;
  //         },
  //       },
  //       SectionTitle: {
  //         label: "Section Title Component",
  //         fields: {
  //           title: {
  //             type: "text",
  //           },
  //           paragraph: {
  //             type: "textarea",
  //           },
  //           width: {
  //             type: "text",
  //           },
  //           mb: {
  //             type: "number",
  //           },
  //           align: {
  //             type: "radio",
  //             options: [
  //               { label: "Left", value: "text-left" },
  //               { label: "Center", value: "text-center" },
  //               { label: "Right", value: "text-end" },
  //             ],
  //           },
  //         },
  //         render: (fields) => {
  //           return <SectionTitleComponent {...fields} />;
  //         },
  //       },
  //       Feature: {
  //         label: "Feature Component",
  //         fields: {
  //           icon: {
  //             type: "textarea",
  //           },
  //           title: {
  //             type: "text",
  //           },
  //           paragraph: {
  //             type: "textarea",
  //           },
  //         },
  //         render: (fields) => {
  //           return <SingleFeature {...fields} />;
  //         },
  //       },
  //       Video: {
  //         label: "Video Component",
  //         fields: {
  //           iframeId: {
  //             type: "text",
  //           },
  //           channel: {
  //             type: "select",
  //             options: [{ label: "Youtube", value: "youtube" }],
  //           },
  //           preImageUrl: {
  //             type: "text",
  //           },
  //           playButtinSVG: {
  //             type: "text",
  //           },
  //         },
  //         render: (fields) => {
  //           return <Video {...fields} />;
  //         },
  //       },
  //       Icon: {
  //         fields: {
  //           ...IconConfig,
  //         },
  //         render: (fields) => {
  //           return <MaterialUIICon {...fields} />;
  //         },
  //       },

  //       // Data Display
  //       Tooltip: {
  //         fields: {
  //           ...ToolTipConfig,
  //         },
  //         render: (fields) => {
  //           return <Tooltips {...fields} />;
  //         },
  //       },
  //       Typography: {
  //         fields: {
  //           ...TypographyConfig,
  //           sx: {
  //             type: "object",
  //             objectFields: {
  //               ...flex,
  //             },
  //           },
  //         },
  //         render: (fields) => {
  //           return <TypographyComponenet {...fields} />;
  //         },
  //       },
  //       Divider: {
  //         fields: {
  //           ...DividerConfig,
  //         },
  //         render: (fields) => {
  //           return <DividerComponent {...fields} />;
  //         },
  //       },
  //     },
  //   };

  const handleUpdateData = (data) => {
    console.log(data);
    // setPreviewData(data);
  };

  // Save the data to your database
  const save = (data) => {
    // console.log(data);
    setPreviewData(data);
    setData(data);
    updateData(data);
  };

  return (
    <div style={{ position: "relative", zIndex: 1000 }}>
      <Box sx={{ position: "absolute", top: 15, right: 215, zIndex: 1001 }}>
        {!editor && (
          <ButtonComponent
            onClick={() => {
              setEditor(true);
              setPreview(false);
            }}
            variant="outlined"
          >
            Editor
          </ButtonComponent>
        )}
      </Box>
      {editor && (
        <Puck
          config={puckEditorConfig}
          data={data}
          onPublish={save}
          onChange={handleUpdateData}
          overrides={{
            // Render a custom element for each item in the component list
            headerActions: ({ children }) => (
              <>
                {children}
                {!preview && (
                  <ButtonComponent
                    onClick={() => {
                      setPreview(true);
                      setEditor(false);
                      router.push(
                        `../${encodeURIComponent(
                          getQueryParameter("pageName"),
                        )}`,
                      );
                    }}
                    variant="outlined"
                  >
                    Preview
                  </ButtonComponent>
                )}
              </>
            ),
          }}
        ></Puck>
      )}
      {preview && <Preview config={puckEditorConfig} data={previewData} />}
    </div>
  );
};

export default Editor;
