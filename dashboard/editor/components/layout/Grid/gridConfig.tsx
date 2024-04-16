import { FlexProperties } from "@/dashboard/editor/css/flex";

export const GridConfig = {
  className: { type: "textarea" },
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
  spacing: { type: "number" },
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
  wrap: FlexProperties().flexWrap,
  sx: {
    type: "object",
    objectFields: {
      ...FlexProperties(),
    },
  },
};
