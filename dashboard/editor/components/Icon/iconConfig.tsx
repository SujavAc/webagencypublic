import Spacing from "../../css/spacing.json";

export const IconConfig = {
  className: { type: "textarea" },
  name: {
    type: "text",
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
  fontSize: {
    type: "select",
    options: [
      { label: "Inherit", value: "inherit" },
      { label: "Large", value: "large" },
      { label: "Medium", value: "medium" },
      { label: "Small", value: "small" },
      // Add more options as needed
    ],
  },
  sx: {
    type: "object",
    objectFields: {
      ...Spacing,
    },
  },
};
