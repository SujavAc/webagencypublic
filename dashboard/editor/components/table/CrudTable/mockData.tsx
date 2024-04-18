export const TableMockData = {
  databasePath: "contactus",
  tableFor: "Contact us data management",
  limit: 3,
  tableHeadCells: [
    { id: "email", label: "Email", disableSorting: false },
    { id: "title", label: "Title", disableSorting: false },
    { id: "action", label: "Action", disableSorting: true },
  ],
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
  storeValueAs: "contactData",
};
