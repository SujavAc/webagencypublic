export const editorFormMockData = {
  databasePath: "anyFormData",
  formTitle: "Contact Form",
  formData: [
    {
      name: "name",
      helperText: "Please enter your name",
      type: "input",
      rules: {
        required: true,
      },
      fieldProps: {
        label: "Full Name",
        variant: "outlined",
      },
    },
    {
      name: "email",
      helperText: "Please enter your email",
      type: "input",
      rules: {
        required: true,
        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      },
      fieldProps: {
        label: "Email Address",
        variant: "outlined",
        type: "email",
      },
    },
    {
      name: "message",
      helperText: "Please enter your message",
      type: "input",
      rules: {
        required: true,
      },
      fieldProps: {
        label: "Message",
        variant: "outlined",
        multiline: true,
        rows: 3,
      },
    },
  ],
};
