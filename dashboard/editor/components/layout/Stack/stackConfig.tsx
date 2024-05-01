import { FlexProperties } from "@/dashboard/editor/css/flex";
import Spacing from "@/dashboard/editor/css/spacing.json";

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
  sx: {
    type: "object",
    objectFields: {
      ...FlexProperties(),
      ...Spacing,
    },
  },
};
