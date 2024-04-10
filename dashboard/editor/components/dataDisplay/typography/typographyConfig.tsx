import { SpacedInput } from "@/dashboard/editor/editorFields";

export const TypographyConfig = {
  text: {
    type: "text",
  },
  align: {
    type: "custom",
    render: ({ onChange, value }) => (
      <SpacedInput
        type="togglebutton"
        label="Align Content"
        value={value}
        options={[
          { label: "Inherit", value: "inherit" },
          { icon: "FormatAlignLeft", value: "left" },
          { icon: "FormatAlignCenter", value: "center" },
          { icon: "FormatAlignRight", value: "right" },
          { icon: "FormatAlignJustify", value: "justify" },
          // Add more options as needed
        ]}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    ),
  },
  gutterBottom: {
    type: "radio",
    options: [
      { label: "True", value: true },
      { label: "false", value: false },
    ],
  },
  noWrap: {
    type: "radio",
    options: [
      { label: "True", value: true },
      { label: "false", value: false },
    ],
  },
  paragraph: {
    type: "radio",
    options: [
      { label: "True", value: true },
      { label: "false", value: false },
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
};
