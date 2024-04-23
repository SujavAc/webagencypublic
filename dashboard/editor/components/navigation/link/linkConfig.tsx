export const LinkConfig = {
  linkLabel: {
    type: "text",
  },
  href: {
    type: "text",
  },
  color: {
    type: "select",
    options: [
      { label: "Inherit", value: "inherit" },
      { label: "Primary", value: "primary" },
      { label: "Secondary", value: "secondary" },
      { label: "Error", value: "error" },
    ],
  },
  underline: {
    type: "radio",
    options: [
      { label: "Always", value: "always" },
      { label: "Hover", value: "hover" },
      { label: "None", value: "none" },
    ],
  },
  variant: {
    type: "select",
    options: [
      { label: "Body 1", value: "body1" },
      { label: "Body 2", value: "body2" },
      { label: "Button", value: "button" },
      { label: "Caption", value: "caption" },
      { label: "Heading 1", value: "h1" },
      { label: "Heading 2", value: "h2" },
      { label: "Heading 3", value: "h3" },
      { label: "Heading 4", value: "h4" },
      { label: "Heading 5", value: "h5" },
      { label: "Heading 6", value: "h6" },
      { label: "Inherit", value: "inherit" },
      { label: "Overline", value: "overline" },
      { label: "Subtitle 1", value: "subtitle1" },
      { label: "Subtitle 2", value: "subtitle2" },
      // Add more options as needed
    ],
  },
  target: {
    type: "select",
    options: [
      { label: "Open In New Tab", value: "_blank" },
      { label: "Same Page", value: "_self" },
    ],
  },
};
