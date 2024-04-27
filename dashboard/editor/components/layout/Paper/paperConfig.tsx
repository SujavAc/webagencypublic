import { FlexProperties } from "@/dashboard/editor/css/flex";
import Spacing from "@/dashboard/editor/css/spacing.json";

export const PaperConfig = {
  id: { type: "text" },
  className: { type: "textarea" },
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
      ...FlexProperties(),
      ...Spacing,
    },
  },
};
