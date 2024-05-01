export const MenuConfig = {
  id: { type: "text" },
  className: { type: "textarea" },
  buttonMenu: {
    type: "radio",
    options: [
      { label: "False", value: false },
      { label: "True", value: true },
    ],
  },
  buttonLabel: {
    type: "text",
  },
  menuItems: {
    type: "array",
    arrayFields: {
      label: { type: "text" },
      icon: { type: "text" },
      href: { type: "text" },
    },
  },
  anchorOrigin: {
    type: "object",
    objectFields: {
      vertical: {
        type: "select",
        options: [
          { label: "Left", value: "left" },
          { label: "Right", value: "right" },
          { label: "Top", value: "top" },
          { label: "Bottom", value: "bottom" },
        ],
      },
      horizontal: {
        type: "select",
        options: [
          { label: "Left", value: "left" },
          { label: "Right", value: "right" },
          { label: "Top", value: "top" },
          { label: "Bottom", value: "bottom" },
        ],
      },
    },
  },
  transformOrigin: {
    type: "object",
    objectFields: {
      vertical: {
        type: "select",
        options: [
          { label: "Left", value: "left" },
          { label: "Right", value: "right" },
          { label: "Top", value: "top" },
          { label: "Bottom", value: "bottom" },
        ],
      },
      horizontal: {
        type: "select",
        options: [
          { label: "Left", value: "left" },
          { label: "Right", value: "right" },
          { label: "Top", value: "top" },
          { label: "Bottom", value: "bottom" },
        ],
      },
    },
  },
};
