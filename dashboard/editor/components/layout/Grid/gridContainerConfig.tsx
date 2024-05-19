import { FlexProperties } from "@/dashboard/editor/css/flex";

export const GridContainerConfig = {
  id: { type: "text" },
  className: { type: "textarea" },
  direction: FlexProperties().flexDirection,
  justifyContent: FlexProperties().justifyContent,
  alignItems: FlexProperties().alignItems,
  columnSpacing: {
    type: "object",
    objectFields: {
      xs: {
        type: "number",
      },
      sm: {
        type: "number",
      },
      md: {
        type: "number",
      },
      lg: {
        type: "number",
      },
    },
  },
  rowSpacing: {
    type: "object",
    objectFields: {
      xs: {
        type: "number",
      },
      sm: {
        type: "number",
      },
      md: {
        type: "number",
      },
      lg: {
        type: "number",
      },
    },
  },
  spacing: {
    type: "object",
    objectFields: {
      xs: {
        type: "number",
      },
      sm: {
        type: "number",
      },
      md: {
        type: "number",
      },
      lg: {
        type: "number",
      },
    },
  },
  wrap: FlexProperties().flexWrap,
};
