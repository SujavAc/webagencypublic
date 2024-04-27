export const DividerConfig = {
  id: { type: "text" },
  className: { type: "textarea" },
  orientation: {
    type: "select",
    options: [
      { label: "Horizontal", value: "horizontal" },
      { label: "Vertical", value: "vertical" },
    ],
  },
  textAlign: {
    type: "radio",
    options: [
      { label: "Left", value: "left" },
      { label: "Center", value: "center" },
      { label: "Right", value: "right" },
    ],
  },
  flexItem: {
    type: "radio",
    options: [
      { label: "True", value: true },
      { label: "false", value: false },
    ],
  },
  variant: {
    type: "select",
    options: [
      { label: "Full Width", value: "fullWidth" },
      { label: "Inset", value: "inset" },
      { label: "Middle", value: "middle" },
    ],
  },
};
