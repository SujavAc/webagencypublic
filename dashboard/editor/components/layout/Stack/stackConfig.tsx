import { FlexProperties } from "@/dashboard/editor/css/flex";

export const StackConfig = {
  id: { type: "text" },
  className: { type: "textarea" },
  direction: {
    ...FlexProperties().flexDirection,
  },
  alignItems: FlexProperties().alignItems,
  justifyContent: FlexProperties().justifyContent,
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
};
