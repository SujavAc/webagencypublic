export const SectionTitleFormData = {
  formData: [
    {
      name: "title",
      helperText: "This is required",
      type: "input",
      rules: {
        required: true,
      },
      fieldProps: {
        label: "Section Title",
        variant: "outlined",
      },
    },
    {
      name: "paragraph",
      helperText: "This is optional",
      type: "rte",
      rules: {
        required: false,
      },
      fieldProps: {
        label: "Section Paragraph",
        variant: "outlined",
      },
    },
  ],
};
