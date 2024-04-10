export const ContactDetailFormData = {
  formData: [
    {
      name: "organisationName",
      helperText: "Please enter your organisation name",
      type: "input",
      rules: {
        required: true,
      },
      fieldProps: {
        label: "Organisation name",
        variant: "outlined",
      },
    },
    {
      name: "organisationLocation",
      helperText: "Please enter your organisation location",
      type: "input",
      rules: {
        required: true,
      },
      fieldProps: {
        label: "Organisation Location",
        variant: "outlined",
      },
    },
    {
      name: "organisationAddress",
      helperText: "Please enter your organisation address",
      type: "input",
      rules: {
        required: true,
      },
      fieldProps: {
        label: "Organisation Address",
        variant: "outlined",
      },
    },
    {
      name: "organisationPhoneNumber",
      helperText: "Please enter your organisation contact number",
      type: "input",
      rules: {
        required: true,
      },
      fieldProps: {
        label: "Organisation Contact Number",
        variant: "outlined",
      },
    },
    {
      name: "organisationEmailAddress",
      helperText: "Please enter your organisation  email address",
      type: "input",
      rules: {
        required: true,
      },
      fieldProps: {
        label: "Organisation email address",
        variant: "outlined",
        type: "email",
      },
    },
    {
      name: "organisationAllRightReserveText",
      helperText: "Organisation right and reserve text",
      type: "input",
      rules: {
        required: true,
      },
      fieldProps: {
        label: "Organisation email address",
        variant: "outlined",
        multiline: true,
        rows: 3,
      },
    },
  ],
};
