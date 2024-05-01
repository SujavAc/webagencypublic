import { FlexProperties } from "@/dashboard/editor/css/flex";
import Spacing from "@/dashboard/editor/css/spacing.json";

export const GridItemConfig = {
  id: { type: "text" },
  className: { type: "textarea" },
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
  sx: {
    type: "object",
    objectFields: {
      ...FlexProperties(),
      ...Spacing,
    },
  },
};
