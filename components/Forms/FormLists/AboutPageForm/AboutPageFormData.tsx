export const AboutPageFormData = {
  formData: [
    {
      name: "aboutPageIntro",
      helperText: "This is required",
      type: "input",
      rules: {
        required: true,
      },
      fieldProps: {
        label: "About page intro",
        variant: "outlined",
      },
    },
    {
      name: "aboutPageDescription",
      helperText: "This is required",
      type: "rte",
      rules: {
        required: true,
      },
      fieldProps: {
        label: "About page description",
        variant: "outlined",
      },
    },
  ],
  defaultValues: {
    aboutPageIntro: "test intro",
    aboutPageDescription: "test description",
  },
};
