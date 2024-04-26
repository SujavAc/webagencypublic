import { FlexProperties } from "@/dashboard/editor/css/flex";
import Spacing from "@/dashboard/editor/css/spacing.json";

export const ContainerConfig = {
  id: { type: "text" },
  className: { type: "textarea" },
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
      ...FlexProperties(),
      ...Spacing,
    },
  },
};
