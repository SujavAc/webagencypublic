import ContainerLayout from "./components/layout/Container";
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
import SectionTitleComponent from "./components/builtInComponent/sectionTitle";
import SingleFeature from "./components/builtInComponent/singleFeature/SingleFeature";
import Video from "./components/builtInComponent/video";
import Hero from "./components/builtInComponent/Hero";
import { GridContainerConfig } from "./components/layout/Grid/gridContainerConfig";
import CrudTable from "./components/table/CrudTable";
import { crudTableConfig } from "./components/table/CrudTable/crudTableConfig";
import { editorFormConfig } from "./components/table/editorForm/editorFormConfig";
import EditorForm from "./components/table/editorForm";
import SiginInForm from "./components/common/Forms/FormLists/signin";
import VideoPlayer from "./components/builtInComponent/video/customVideo";
import { CustomHtmlConfig } from "./components/builtInComponent/customHTML/customHtmlConfig";
import CustomHtml from "./components/builtInComponent/customHTML";
import { googleMapConfig } from "./components/builtInComponent/GoogleMap/googleMapConfig";
import Map from "./components/builtInComponent/GoogleMap";
import { SectionTitleConfig } from "./components/builtInComponent/sectionTitle/sectionTitleConfig";
import { CarouselConfig } from "./components/layout/Carousel/CarouselConfig";
import Carousel from "./components/layout/Carousel";
import CarouselItem from "./components/layout/Carousel/CarouselItem";
import { SocialShare } from "./components/builtInComponent/SocialShare";
import { SocialShareConfig } from "./components/builtInComponent/SocialShare/socialShareConfig";
import CopyTextComponent from "./components/builtInComponent/Copy";
import { CopyConfig } from "./components/builtInComponent/Copy/copyConfig";
import { ContainerConfig } from "./components/layout/Container/containerConfig";
import { PaperConfig } from "./components/layout/Paper/paperConfig";
import { StackConfig } from "./components/layout/Stack/stackConfig";
import GridContainer from "./components/layout/Grid";
import { GridItemConfig } from "./components/layout/Grid/gridItemConfig";
import SiginUpForm from "./components/common/Forms/FormLists/signUp";
import { CookieConsentConfig } from "./components/builtInComponent/cookie/cookieConsentConfig";
import CookieConsent from "./components/builtInComponent/cookie";
import { sxConfig } from "./css/sx";
import { StorageConfig } from "./components/databaseComponent/storage/storageConfig";
import FilesList from "./components/databaseComponent/storage";
import { BulletList } from "./components/builtInComponent/bulletPoint";
import { BulletPointConfig } from "./components/builtInComponent/bulletPoint/bulletPointConfig";

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
        "Carousel",
        "CarouselItem",
      ],
      defaultExpanded: false, // Collapse this category by default
    },
    Inputs: {
      components: ["Button"],
      defaultExpanded: false, // Collapse this category by default
    },
    Content: {
      components: [
        "Hero",
        "SectionTitle",
        "Feature",
        "Video",
        "Icon",
        "CustomHTML",
        "Map",
        "Share",
        "CopyText",
        "CookieConsent",
        "BulletPoint",
      ],
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
      components: ["Image", "CustomVideo"],
      defaultExpanded: false, // Collapse this category by default
    },
    Surface: {
      components: ["Navbar", "Footer", "Accordion"],
      defaultExpanded: false, // Collapse this category by default
    },
    Database: {
      components: ["Table", "StorageImageViewer"],
      defaultExpanded: false, // Collapse this category by default
    },
    Form: {
      components: ["Form", "SignInForm", "SignUpForm"],
      defaultExpanded: false, // Collapse this category by default
    },
  },
  components: {
    PaperWrapper: {
      label: "Paper Container",
      fields: {
        ...PaperConfig,
        sx: sxConfig.sx,
      },
      defaultProps: {
        elevation: 5,
        variant: "elevation",
        sx: {
          p: 2,
        },
      },
      resolveData: sxConfig.resolveData,
      render: (fields) => {
        return <PaperWrapper {...fields} />;
      },
    },
    GridLayout: {
      label: "Grid Container",
      fields: {
        ...GridContainerConfig,
        sx: sxConfig.sx,
      },
      defaultProps: {
        columnSpacing: {
          xs: 2,
          sm: 2,
          md: 4,
          lg: 4,
        },
        rowSpacing: {
          xs: 2,
          sm: 2,
          md: 4,
          lg: 4,
        },
        spacing: {
          xs: 2,
          sm: 2,
          md: 4,
          lg: 4,
        },
      },
      resolveData: sxConfig.resolveData,
      render: (fields) => {
        return <GridContainer {...fields} />;
      },
    },
    GridItem: {
      label: "Grid Item",
      fields: {
        ...GridItemConfig,
        sx: sxConfig.sx,
      },
      defaultProps: {
        xs: 12,
        sm: 6,
        md: 4,
        lg: 3,
        sx: {
          display: {
            xs: "flex",
            sm: "flex",
            md: "flex",
            lg: "flex",
          },
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
          },
          flexWrap: {
            xs: "wrap",
            sm: "wrap",
            md: "nowrap",
            lg: "nowrap",
          },
          gap: {
            xs: 2,
            sm: 2,
            md: 3,
            lg: 3,
          },
        },
      },
      resolveData: sxConfig.resolveData,
      render: (fields) => {
        return <GridItem {...fields} />;
      },
    },
    Container: {
      label: "Container",
      fields: {
        ...ContainerConfig,
        sx: sxConfig.sx,
      },
      resolveData: sxConfig.resolveData,
      render: (fields) => {
        return <ContainerLayout {...fields} />;
      },
    },
    Box: {
      fields: {
        ...BoxConfig,
        sx: sxConfig.sx,
      },
      defaultProps: {
        sx: {
          display: {
            xs: "flex",
            sm: "flex",
            md: "flex",
            lg: "flex",
          },
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
          },
          flexWrap: {
            xs: "wrap",
            sm: "wrap",
            md: "nowrap",
            lg: "nowrap",
          },
          gap: {
            xs: 2,
            sm: 2,
            md: 3,
            lg: 3,
          },
          minHeight: {
            xs: 50,
            sm: 50,
            md: 70,
            lg: 70,
          },
        },
      },
      resolveData: sxConfig.resolveData,
      render: (fields) => {
        return <BoxContainer {...fields} />;
      },
    },
    Tabs: {
      label: "Tab Container",
      fields: {
        defaultTab: { type: "text" },
        className: { type: "textarea" },
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
        sx: sxConfig.sx,
      },
      resolveData: sxConfig.resolveData,
      render: (fields) => {
        return <TabsComponent {...fields} />;
      },
    },
    StackLayout: {
      label: "Stack Container",
      fields: {
        ...StackConfig,
        sx: sxConfig.sx,
      },
      defaultProps: {
        direction: {
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
        },
        alignItems: {
          xs: "flex-start",
          sm: "flex-start",
          md: "center",
          lg: "center",
        },
        justifyContent: {
          xs: "flex-start",
          sm: "flex-start",
          md: "center",
          lg: "center",
        },
        spacing: {
          xs: 2,
          sm: 2,
          md: 3,
          lg: 3,
        },
        sx: {
          display: {
            xs: "flex",
            sm: "flex",
            md: "flex",
            lg: "flex",
          },
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
          },
          flexWrap: {
            xs: "wrap",
            sm: "wrap",
            md: "nowrap",
            lg: "nowrap",
          },
          gap: {
            xs: 2,
            sm: 2,
            md: 3,
            lg: 3,
          },
        },
      },
      resolveData: sxConfig.resolveData,
      render: (fields) => {
        return <StackLayout {...fields} />;
      },
    },
    Carousel: {
      fields: {
        ...CarouselConfig,
      },
      defaultProps: {
        className: "",
        options: {
          label: "custom carousel",
          type: "loop",
          perPage: 2,
          rewind: true,
        },
      },
      render: (fields) => {
        return <Carousel {...fields} />;
      },
    },
    CarouselItem: {
      fields: {},
      render: (fields) => {
        return <CarouselItem {...fields} />;
      },
    },

    // Inputs
    Button: {
      fields: {
        ...ButtonWrapperConfig,
        sx: sxConfig.sx,
      },
      defaultProps: {
        disabled: false,
        disableElevation: false,
        fullWidth: false,
        href: "",
        variant: "contained",
        color: "primary",
        size: "medium",
      },
      resolveData: sxConfig.resolveData,
      render: (fields) => {
        return <ButtonWrapper {...fields} />;
      },
    },

    // navigation
    Menu: {
      label: "Menu Component",
      fields: {
        ...MenuConfig,
        sx: sxConfig.sx,
      },
      defaultProps: {
        buttonMenu: true,
        buttonLabel: "test button",
        menuItems: [
          {
            icon: "",
            label: "",
            href: "",
          },
        ],
        anchorOrigin: {
          vertical: "left",
          horizontal: "bottom",
        },
        transformOrigin: {
          vertical: "left",
          horizontal: "bottom",
        },
      },
      resolveData: sxConfig.resolveData,
      render: (fields) => {
        return <MenuComponent {...fields} />;
      },
    },
    Link: {
      fields: {
        ...LinkConfig,
        sx: sxConfig.sx,
      },
      defaultProps: {
        linkLabel: "test button",
        href: "/",
        color: "primary",
        underline: "always",
        variant: "button",
        target: "_self",
      },
      resolveData: sxConfig.resolveData,
      render: (fields) => {
        return <Links {...fields} />;
      },
    },

    // Content
    Hero: {
      label: "Hero Component",
      fields: {
        id: {
          type: "text",
        },
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
        ...SectionTitleConfig,
      },
      render: (fields) => {
        return <SectionTitleComponent {...fields} />;
      },
    },
    Feature: {
      label: "Feature Component",
      fields: {
        id: {
          type: "text",
        },
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
        id: {
          type: "text",
        },
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
        sx: sxConfig.sx,
      },
      resolveData: sxConfig.resolveData,
      render: (fields) => {
        return <MaterialUIICon {...fields} />;
      },
    },
    CustomHTML: {
      fields: {
        ...CustomHtmlConfig,
      },
      render: (fields) => {
        return <CustomHtml {...fields} />;
      },
    },
    Map: {
      fields: {
        ...googleMapConfig,
        sectionTitleProps: {
          type: "object",
          objectFields: {
            ...SectionTitleConfig,
          },
        },
        linkOnInfoBox: {
          type: "object",
          objectFields: {
            ...LinkConfig,
          },
        },
      },
      defaultProps: {
        value: {
          lat: -27.4459816,
          lng: 152.9218581,
        },
        height: 500,
        zoomLevel: 15,
        openInfoBox: false,
        sectionTitleProps: {
          title: "Please customise your info box title",
          paragraph: "Please customise your info box paragraph",
          width: "100%",
          md: "16px",
          align: "left",
        },
        linkOnInfoBox: {
          linkLabel: "Get Direction",
          href: "/",
          color: "primary",
          underline: "always",
          variant: "button",
        },
      },
      render: (fields) => {
        return <Map {...fields} />;
      },
    },
    Share: {
      fields: {
        ...SocialShareConfig,
      },
      defaultProps: {
        customIcon: false,
        enableShareCount: true,
        platform: "FacebookShareButton",
        socialPlatformIconProps: { round: true, size: 64 },
        socialPlatformDataProps: {
          url: window?.location?.href || "url",
          title: window?.document?.title || "title",
          quote: "don't know",
          hashtag: "hashtag",
        },
      },
      render: (fields) => {
        return <SocialShare {...fields} />;
      },
    },
    CopyText: {
      fields: {
        ...CopyConfig,
      },
      defaultProps: {
        textToCopy: window?.location?.href || window?.document?.title || "text",
        iconButton: true,
        color: "primary",
        size: "medium",
      },
      render: (fields) => {
        return <CopyTextComponent {...fields} />;
      },
    },
    CookieConsent: {
      fields: {
        ...CookieConsentConfig,
      },
      render: (fields) => {
        return <CookieConsent {...fields} />;
      },
    },
    BulletPoint: {
      fields: {
        ...BulletPointConfig,
      },
      render: (fields) => {
        return <BulletList {...fields} />;
      },
    },

    // Data Display
    Tooltip: {
      fields: {
        ...ToolTipConfig,
        sx: sxConfig.sx,
      },
      resolveData: sxConfig.resolveData,
      render: (fields) => {
        return <Tooltips {...fields} />;
      },
    },
    Typography: {
      fields: {
        ...TypographyConfig,
        sx: sxConfig.sx,
      },
      resolveData: sxConfig.resolveData,
      render: (fields) => {
        return <TypographyComponenet {...fields} />;
      },
    },
    Divider: {
      fields: {
        ...DividerConfig,
        sx: sxConfig.sx,
      },
      render: (fields) => {
        return <DividerComponent {...fields} />;
      },
    },
    Avatar: {
      fields: {
        ...AvatarConfig,
        sx: sxConfig.sx,
      },
      resolveData: sxConfig.resolveData,
      render: (fields) => {
        return <Avatars {...fields} />;
      },
    },
    Chip: {
      fields: {
        ...ChipConfig,
        sx: sxConfig.sx,
      },
      resolveData: sxConfig.resolveData,
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

    CustomVideo: {
      fields: {
        id: { type: "text" },
        src: { type: "text" },
        poster: { type: "text" },
        controls: {
          type: "radio",
          options: [
            { label: "False", value: false },
            { label: "True", value: true },
          ],
        },
        autoPlay: {
          type: "radio",
          options: [
            { label: "False", value: false },
            { label: "True", value: true },
          ],
        },
        loop: {
          type: "radio",
          options: [
            { label: "False", value: false },
            { label: "True", value: true },
          ],
        },
        muted: {
          type: "radio",
          options: [
            { label: "False", value: false },
            { label: "True", value: true },
          ],
        },
      },
      defaultProps: {
        autoplay: true,
        loop: true,
        muted: true,
      },
      render: (fields) => {
        return <VideoPlayer {...fields} />;
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
        sx: sxConfig.sx,
      },
      resolveData: sxConfig.resolveData,
      render: (fields) => {
        return <AccordionComponent {...fields} />;
      },
    },

    // Database Tables
    Table: {
      fields: {
        ...crudTableConfig,
      },
      render: (fields) => {
        return <CrudTable {...fields} />;
      },
    },

    StorageImageViewer: {
      fields: {
        ...StorageConfig,
      },
      defaultProps: {
        itemsPerPage: 5,
        isGalleryView: true,
      },
      render: (fields) => {
        return <FilesList {...fields} />;
      },
    },

    // Forms
    Form: {
      fields: {
        ...editorFormConfig,
      },
      defaultProps: {
        formData: [
          {
            name: "test",
            helperText: "",
            type: "input",
            rules: {
              required: false,
            },
            fieldProps: {
              label: "",
              variant: "outlined",
            },
          },
        ],
      },
      render: (fields) => {
        return <EditorForm {...fields} />;
      },
    },
    SignInForm: {
      fields: {
        title: { type: "text" },
      },
      render: (fields) => {
        return <SiginInForm {...fields} />;
      },
    },
    SignUpForm: {
      fields: {
        title: { type: "text" },
      },
      render: (fields) => {
        return <SiginUpForm {...fields} />;
      },
    },
  },

  // root configuration
  root: {
    fields: {
      title: { type: "text" }, // We need to redefine the `title` field if we want to retain it
      description: { type: "textarea" },
      domain: { type: "text" },
      openGraph: {
        type: "object",
        objectFields: {
          title: { type: "text" },
          description: { type: "textarea" },
          url: { type: "text" },
          siteName: { type: "text" },
          images: { type: "textarea" },
        },
      },
      icons: {
        type: "object",
        objectFields: {
          icon: { type: "text" },
          shortcut: { type: "text" },
          apple: { type: "text" },
        },
        other: {
          type: "object",
          objectFields: {
            rel: { type: "text" },
            url: { type: "text" },
          },
        },
      },
      twitter: {
        type: "object",
        objectFields: {
          card: { type: "text" },
          title: { type: "text" },
          description: { type: "textarea" },
          siteId: { type: "text" },
          creator: { type: "text" },
          creatorId: { type: "text" },
          images: {
            type: "object",
            objectFields: {
              url: { type: "text" },
              alt: { type: "text" },
            },
          },
        },
      },
    },
  },
};

// import TestComp from "atecheditor";
// import Header from "./components/surfaces/navbar";
// import SiginInForm from "./components/common/Forms/FormLists/signin";
// import { NavbarConfig } from "./components/surfaces/navbar/navbarConfig";

// // // Create Puck component config
// export const puckEditorConfig = () => {
//   const { PuckEditorConfig } = TestComp;
//   return {
//     categories: {
//       ...PuckEditorConfig.categories,
//       Surface: {
//         components: [
//           ...PuckEditorConfig.categories.Surface.components,
//           "Navbar",
//         ],
//         defaultExpanded: false, // Collapse this category by default
//       },
//       Database: {
//         components: [
//           ...PuckEditorConfig.categories.Database.components,
//           "SignInForm",
//         ],
//         defaultExpanded: false, // Collapse this category by default
//       },
//     },
//     components: {
//       ...PuckEditorConfig.components,

//       // surfaces
//       Navbar: {
//         fields: {
//           ...NavbarConfig,
//         },
//         defaultProps: {
//           menuData: [
//             {
//               title: "",
//               path: "",
//               newTab: "",
//               subMenu: [
//                 {
//                   title: "",
//                   path: "",
//                   newTab: "",
//                 },
//               ],
//             },
//           ],
//         },
//         render: (fields) => {
//           return <Header {...fields} />;
//         },
//       },

//       SignInForm: {
//         fields: {
//           title: { type: "text" },
//         },
//         render: (fields) => {
//           return <SiginInForm {...fields} />;
//         },
//       },
//     },
//     ...PuckEditorConfig.root,
//   };
// };
