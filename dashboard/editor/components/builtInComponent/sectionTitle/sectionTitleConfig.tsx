export const SectionTitleConfig = {
  title: {
    type: "text",
  },
  paragraph: {
    type: "textarea",
  },
  width: {
    type: "text",
  },
  mb: {
    type: "text",
  },
  align: {
    type: "radio",
    options: [
      { label: "Left", value: "text-left" },
      { label: "Center", value: "text-center" },
      { label: "Right", value: "text-end" },
    ],
  },
};
