import ContainerLayout from "./components/layout/Container";
import GridLayout from "./components/layout/Grid";
import PaperWrapper from "./components/layout/Paper";
import StackLayout from "./components/layout/Stack";
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
import flex from "./css/flex.json";
import SectionTitleComponent from "@/components/Common/SectionTitle";
import ButtonWrapper from "./components/inputs/button";
import { ButtonWrapperConfig } from "./components/inputs/button/ButtonWrapperConfig";
import Avatars from "./components/dataDisplay/avatar";
import { AvatarConfig } from "./components/dataDisplay/avatar/avatarConfig";
import Chip from "./components/dataDisplay/chip";
import { ChipConfig } from "./components/dataDisplay/chip/chipConfig";
import ImageComponent from "./components/Image";
import { ImageConfig } from "./components/Image/imageConfig";
import { NavbarConfig } from "./components/surfaces/navbar/navbarConfig";
import Header from "./components/surfaces/navbar";
import { FooterConfig } from "./components/surfaces/footer/footerConfig";
import Footer from "./components/surfaces/footer";
import { BoxConfig } from "./components/layout/box/boxConfig";
import BoxContainer from "./components/layout/box";
import AccordionComponent from "./components/surfaces/accordion";
import { AccordionConfig } from "./components/surfaces/accordion/accordionConfig";
import GridItem from "./components/layout/Grid/gridItem";
import TabsComponent from "./components/layout/Tab";
import Video from "./components/builtInComponent/video";
import Hero from "./components/builtInComponent/Hero";
import SingleFeature from "./components/builtInComponent/singleFeature/SingleFeature";

// Create Puck component config
export const puckEditorConfig = {
  categories: {
    Layout: {
      components: [
        "Container",
        "GridLayout",
        "GridItem",
        "PaperWrapper",
        "StackLayout",
        "Box",
        "Tabs",
      ],
      defaultExpanded: false, // Collapse this category by default
    },
    Inputs: {
      components: ["Button"],
      defaultExpanded: false, // Collapse this category by default
    },
    Content: {
      components: ["Hero", "SectionTitle", "Feature", "Video", "Icon"],
      defaultExpanded: false, // Collapse this category by default
    },
    Navigation: {
      components: ["Menu", "Link"],
      defaultExpanded: false, // Collapse this category by default
    },
    DataDisplay: {
      components: ["Tooltip", "Typography", "Divider", "Avatar", "Chip"],
      defaultExpanded: false, // Collapse this category by default
    },
    AssetsComponent: {
      components: ["Image"],
      defaultExpanded: false, // Collapse this category by default
    },
    Surface: {
      components: ["Navbar", "Footer", "Accordion"],
      defaultExpanded: false, // Collapse this category by default
    },
  },
  components: {
    PaperWrapper: {
      label: "Paper Container",
      fields: {
        noOfItems: {
          type: "array",
          arrayFields: {
            title: { type: "text" },
          },
          min: 1,
          max: 5,
        },

        elevation: { type: "number" },
        square: {
          type: "radio",
          options: [
            { label: "False", value: false },
            { label: "True", value: true },
          ],
        },
        variant: {
          type: "select",
          options: [
            { label: "Elevation", value: "elevation" },
            { label: "Outlined", value: "outlined" },
          ],
        },
        sx: {
          type: "object",
          objectFields: {
            ...flex,
          },
        },
      },
      render: ({ noOfItems, sx, ...rest }) => {
        return <PaperWrapper sx={sx} {...rest} noOfItems={noOfItems} />;
      },
    },
    GridLayout: {
      label: "Grid Container",
      fields: {
        columnSpacing: { type: "number" },
        rowSpacing: { type: "number" },
        spacing: { type: "number" },
        wrap: flex.flexWrap,
        sx: {
          type: "object",
          objectFields: {
            ...flex,
          },
        },
      },
      render: ({ ...rest }) => {
        return <GridLayout {...rest} />;
      },
    },
    GridItem: {
      label: "Grid Item",
      fields: {
        noOfItems: {
          type: "array",
          arrayFields: {
            title: { type: "text" },
          },
        },
        sx: {
          type: "object",
          objectFields: {
            ...flex,
          },
        },
      },
      render: ({ noOfItems, ...rest }) => {
        return <GridItem noOfItems={noOfItems} {...rest} />;
      },
    },
    Container: {
      label: "Container",
      fields: {
        fixed: {
          type: "radio",
          options: [
            { label: "False", value: false },
            { label: "True", value: true },
          ],
        },
        maxWidth: {
          type: "select",
          options: [
            { label: "XS", value: "xs" },
            { label: "SM", value: "sm" },
            { label: "MD", value: "md" },
            { label: "LG", value: "lg" },
            { label: "XL", value: "xl" },
            { label: "None", value: false },
          ],
        },
        disableGutters: {
          type: "radio",
          options: [
            { label: "False", value: false },
            { label: "True", value: true },
          ],
        },
        sx: {
          type: "object",
          objectFields: {
            ...flex,
          },
        },
      },
      render: (fields) => {
        return <ContainerLayout {...fields} />;
      },
    },
    Box: {
      fields: {
        ...BoxConfig,
      },
      render: (fields) => {
        return <BoxContainer {...fields} />;
      },
    },
    Tabs: {
      label: "Tab Container",
      fields: {
        defaultTab: { type: "text" },
        tabComponentName: { type: "text" },
        tab: {
          type: "array",
          arrayFields: {
            label: { type: "text" },
            value: { type: "text" },
            disabled: {
              type: "radio",
              options: [
                { label: "False", value: false },
                { label: "True", value: true },
              ],
            },
          },
        },
        tabsProps: {
          type: "object",
          objectFields: {
            orientation: {
              type: "select",
              options: [
                { label: "Horizontal", value: "horizontal" },
                { label: "Vertical", value: "vertical" },
              ],
            },
            variant: {
              type: "select",
              options: [
                { label: "Scrollable", value: "scrollable" },
                { label: "Full Width", value: "fullWidth" },
                { label: "Standard", value: "standard" },
              ],
            },
          },
        },
        tabPanel: {
          type: "array",
          arrayFields: {
            title: { type: "text" },
            value: { type: "text" },
          },
        },
        sx: {
          type: "object",
          objectFields: {
            ...flex,
          },
        },
      },
      render: (fields) => {
        return <TabsComponent {...fields} />;
      },
    },
    StackLayout: {
      label: "Stack Container",
      fields: {
        noOfItems: {
          type: "array",
          arrayFields: {
            title: { type: "text" },
          },
          min: 1,
          max: 5,
        },
        stackProps: {
          type: "object",
          objectFields: {
            direction: {
              ...flex.flexDirection,
            },
            alignItems: flex.alignItems,
            justifyContent: flex.justifyContent,
            spacing: {
              type: "number",
            },
            sx: {
              type: "object",
              objectFields: {
                ...flex,
              },
            },
          },
        },
      },
      render: ({ noOfItems, stackProps }) => {
        return <StackLayout stackProps={stackProps} noOfItems={noOfItems} />;
      },
    },

    // Inputs
    Button: {
      fields: {
        ...ButtonWrapperConfig,
      },
      render: (fields) => {
        return <ButtonWrapper {...fields} />;
      },
    },

    // navigation
    Menu: {
      label: "Menu Component",
      fields: {
        ...MenuConfig,
      },
      render: (fields) => {
        return <MenuComponent {...fields} />;
      },
    },
    Link: {
      fields: {
        ...LinkConfig,
      },
      render: (fields) => {
        return <Links {...fields} />;
      },
    },

    // Content
    Hero: {
      label: "Hero Component",
      fields: {
        title: {
          type: "text",
        },
        description: {
          type: "textarea",
        },
        bottomLeftSvg: {
          type: "textarea",
        },
        rightTopSvg: {
          type: "textarea",
        },
        buttons: {
          type: "array",
          arrayFields: {
            label: { type: "text" },
            href: { type: "text" },
            openInNewTab: {
              type: "radio",
              options: [
                { label: "False", value: false },
                { label: "True", value: true },
              ],
            },
          },
          defaultItemProps: {
            href: "",
            label: "",
            openInNewTab: false,
          },
          min: 1,
          max: 2,
        },
      },
      render: (fields) => {
        return <Hero {...fields} />;
      },
    },
    SectionTitle: {
      label: "Section Title Component",
      fields: {
        title: {
          type: "text",
        },
        paragraph: {
          type: "textarea",
        },
        width: {
          type: "text",
        },
        mb: {
          type: "number",
        },
        align: {
          type: "radio",
          options: [
            { label: "Left", value: "text-left" },
            { label: "Center", value: "text-center" },
            { label: "Right", value: "text-end" },
          ],
        },
      },
      render: (fields) => {
        return <SectionTitleComponent {...fields} />;
      },
    },
    Feature: {
      label: "Feature Component",
      fields: {
        icon: {
          type: "textarea",
        },
        title: {
          type: "text",
        },
        paragraph: {
          type: "textarea",
        },
      },
      render: (fields) => {
        return <SingleFeature {...fields} />;
      },
    },
    Video: {
      label: "Video Component",
      fields: {
        iframeId: {
          type: "text",
        },
        channel: {
          type: "select",
          options: [{ label: "Youtube", value: "youtube" }],
        },
        preImageUrl: {
          type: "text",
        },
        playButtinSVG: {
          type: "text",
        },
      },
      render: (fields) => {
        return <Video {...fields} />;
      },
    },
    Icon: {
      fields: {
        ...IconConfig,
      },
      render: (fields) => {
        return <MaterialUIICon {...fields} />;
      },
    },

    // Data Display
    Tooltip: {
      fields: {
        ...ToolTipConfig,
      },
      render: (fields) => {
        return <Tooltips {...fields} />;
      },
    },
    Typography: {
      fields: {
        ...TypographyConfig,
        sx: {
          type: "object",
          objectFields: {
            ...flex,
          },
        },
      },
      render: (fields) => {
        return <TypographyComponenet {...fields} />;
      },
    },
    Divider: {
      fields: {
        ...DividerConfig,
      },
      render: (fields) => {
        return <DividerComponent {...fields} />;
      },
    },
    Avatar: {
      fields: {
        ...AvatarConfig,
      },
      render: (fields) => {
        return <Avatars {...fields} />;
      },
    },
    Chip: {
      fields: {
        ...ChipConfig,
      },
      render: (fields) => {
        return <Chip {...fields} />;
      },
    },

    // Images
    Image: {
      fields: {
        ...ImageConfig,
      },
      defaultProps: {
        height: 500,
        width: 500,
        quality: 1,
      },
      render: (fields) => {
        return <ImageComponent {...fields} />;
      },
    },

    // surfaces
    Navbar: {
      fields: {
        ...NavbarConfig,
      },
      defaultProps: {
        menuData: [
          {
            title: "",
            path: "",
            newTab: "",
            subMenu: [
              {
                title: "",
                path: "",
                newTab: "",
              },
            ],
          },
        ],
      },
      render: (fields) => {
        return <Header {...fields} />;
      },
    },
    Footer: {
      fields: {
        ...FooterConfig,
      },
      render: (fields) => {
        return <Footer {...fields} />;
      },
    },
    Accordion: {
      fields: {
        ...AccordionConfig,
      },
      render: (fields) => {
        return <AccordionComponent {...fields} />;
      },
    },
  },
};