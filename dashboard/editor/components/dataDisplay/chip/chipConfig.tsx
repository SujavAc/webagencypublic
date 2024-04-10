export const ChipConfig = {
  clickable: {
    type: "radio",
    options: [
      { label: "False", value: false },
      { label: "True", value: true },
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
  disabled: {
    type: "radio",
    options: [
      { label: "False", value: false },
      { label: "True", value: true },
    ],
  },
  icon: {
    type: "text",
  },
  size: {
    type: "select",
    options: [
      { label: "Medium", value: "medium" },
      { label: "Small", value: "small" },
      // Add more options as needed
    ],
  },
  label: {
    type: "text",
  },
  variant: {
    type: "select",
    options: [
      { value: "filled", label: "Filled" },
      { value: "outlined", label: "Outlined" },
      // Add more options as needed
    ],
  },
};
