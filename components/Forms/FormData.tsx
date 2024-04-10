export const formJsonData = {
  formData: [
    {
      name: "firstName",
      helperText: "This is required",
      type: "input",
      rules: {
        required: true,
        maxLength: 10,
        max: null,
        min: 1,
        pattern: "/[A-Za-z]{3}/",
      },
      fieldProps: {
        label: "First Name",
        variant: "outlined",
        multiline: true,
        rows: 4,
        options: [{ label: null, value: null }],
      },
    },
    {
      name: "radioButton",
      helperText: "This is required field",
      type: "radio",
      rules: {
        required: true,
      },
      fieldProps: {
        label: "Radio Button",
        options: [
          { value: "female", label: "Female" },
          { value: "male", label: "Male" },
          { value: "other", label: "Other" },
        ],
      },
    },
    {
      name: "rating",
      helperText: "This is required field",
      type: "rating",
      rules: {
        required: true,
      },
      fieldProps: {
        label: "Rating",
      },
    },
    {
      name: "select",
      helperText: "This is required field",
      type: "select",
      rules: {
        required: true,
      },
      fieldProps: {
        label: "Select options",
        options: [
          { value: "female", label: "Female or Male" },
          { value: "male", label: "Male" },
          { value: "other", label: "Other" },
        ],
      },
    },
    {
      name: "checkbox",
      helperText: "This is required field",
      type: "checkbox",
      rules: {
        required: false,
      },
      fieldProps: {
        label: "Select checkbox",
        options: [
          { value: "female", label: "Female or Male" },
          { value: "male", label: "Male" },
          { value: "other", label: "Other" },
        ],
      },
    },
    {
      name: "checkboxgroup",
      helperText: "This is required field",
      type: "checkboxgroup",
      rules: {
        required: false,
      },
      fieldProps: {
        label: "Select checkbox",
        options: [
          { value: "female", label: "Female or Male" },
          { value: "male", label: "Male" },
          { value: "other", label: "Other" },
        ],
      },
    },
    {
      name: "slider",
      helperText: "This is required field",
      type: "slider",
      rules: {
        required: false,
      },
      fieldProps: {
        label: "Slider",
        options: [
          { value: 0, label: "Female" },
          { value: 50, label: "Male" },
          { value: 100, label: "Other" },
        ],
      },
    },
    {
      name: "switch",
      helperText: "This is required field",
      type: "switch",
      rules: {
        required: false,
      },
      fieldProps: {
        label: "Switch",
      },
    },
    {
      name: "toggleButton",
      helperText: "This is required field",
      type: "togglebutton",
      rules: {
        required: true,
      },
      fieldProps: {
        label: "Toggle Button",
        options: [
          { value: "sujav", label: "Sujav" },
          { value: "aastha", label: "Aastha" },
          { value: "santosh", label: "Santosh" },
        ],
      },
    },
  ],
};
