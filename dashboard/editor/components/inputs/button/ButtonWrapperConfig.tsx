import SpacingProperties from "@/dashboard/editor/css/spacing.json";

export const ButtonWrapperConfig = {
  className: { type: "textarea" },
  disabled: {
    type: "radio",
    options: [
      { label: "False", value: false },
      { label: "True", value: true },
    ],
  },
  iconButton: {
    type: "radio",
    options: [
      { label: "False", value: false },
      { label: "True", value: true },
    ],
  },
  disableElevation: {
    type: "radio",
    options: [
      { label: "False", value: false },
      { label: "True", value: true },
    ],
  },
  endIcon: { type: "text" },
  fullWidth: {
    type: "radio",
    options: [
      { label: "False", value: false },
      { label: "True", value: true },
    ],
  },
  href: { type: "text" },
  startIcon: { type: "text" },
  variant: {
    type: "select",
    options: [
      { value: "contained", label: "Contained" },
      { value: "outlined", label: "Outlined" },
      { value: "standard", label: "Standard" },
    ],
  },
  color: {
    type: "select",
    options: [
      { label: "Inherit", value: "inherit" },
      { label: "Action", value: "action" },
      { label: "Disabled", value: "disabled" },
      { label: "Primary", value: "primary" },
      { label: "Secondary", value: "secondary" },
      { label: "Error", value: "error" },
      { label: "Info", value: "info" },
      { label: "Success", value: "success" },
      { label: "Warning", value: "warning" },
      // Add more options as needed
    ],
  },
  size: {
    type: "select",
    options: [
      { label: "Large", value: "large" },
      { label: "Medium", value: "medium" },
      { label: "Small", value: "small" },
      // Add more options as needed
    ],
  },
  sx: {
    type: "object",
    objectFields: {
      ...SpacingProperties,
    },
  },
};
