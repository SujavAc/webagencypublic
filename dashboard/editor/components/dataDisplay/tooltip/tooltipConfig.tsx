import { FlexProperties } from "@/dashboard/editor/css/flex";

export const ToolTipConfig = {
  className: { type: "textarea" },
  title: {
    type: "text",
  },
  arrow: {
    type: "radio",
    options: [
      { label: "True", value: true },
      { label: "False", value: false },
    ],
  },
  open: {
    type: "radio",
    options: [
      { label: "False", value: false },
      { label: "True", value: true },
    ],
  },
  enterDelay: {
    type: "number",
  },
  placement: {
    type: "select",
    options: [
      { label: "Bottom End", value: "bottom-end" },
      { label: "Bottom Start", value: "bottom-start" },
      { label: "Bottom", value: "bottom" },
      { label: "Left End", value: "left-end" },
      { label: "Left Start", value: "left-start" },
      { label: "Left", value: "left" },
      { label: "Right End", value: "right-end" },
      { label: "Right Start", value: "right-start" },
      { label: "Right", value: "right" },
      { label: "Top End", value: "top-end" },
      { label: "Top Start", value: "top-start" },
      { label: "Top", value: "top" },
      // Add more options as needed
    ],
  },
  sx: {
    type: "object",
    objectFields: {
      ...FlexProperties(),
    },
  },
};
