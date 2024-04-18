export const HeroBannerFormData = {
  formData: [
    {
      name: "title",
      helperText: "This is required",
      type: "input",
      rules: {
        required: true,
      },
      fieldProps: {
        label: "Hero banner title",
        variant: "outlined",
      },
    },
    {
      name: "description",
      helperText: "This is required",
      type: "rte",
      rules: {
        required: true,
      },
      fieldProps: {
        label: "Hero banner description",
        variant: "outlined",
      },
    },
    {
      name: "rightTopSvg",
      helperText: "SVG element",
      type: "input",
      rules: {
        required: false,
      },
      fieldProps: {
        label: "Right Top SVG",
        variant: "outlined",
        multiline: true,
        rows: 3,
      },
    },
    {
      name: "bottomLeftSvg",
      helperText: "SVG element",
      type: "input",
      rules: {
        required: false,
      },
      fieldProps: {
        label: "Bottom Left SVG",
        variant: "outlined",
        multiline: true,
        rows: 3,
      },
    },
  ],
};
