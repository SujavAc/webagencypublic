export const editorFormConfig = {
  databasePath: {
    type: "text",
  },
  formTitle: {
    type: "text",
  },
  formData: {
    type: "array",
    arrayFields: {
      name: { type: "text" },
      label: { type: "text" },
      helperText: { type: "text" },
      type: {
        type: "select",
        options: [
          { label: "None", value: "" },
          { label: "Input", value: "input" },
          { label: "CheckBox Group", value: "checkboxgroup" },
          { label: "CheckBox", value: "checkbox" },
          { label: "Radio", value: "radio" },
          { label: "Rich Text Editor", value: "RTEEditor" },
          { label: "Select", value: "select" },
          { label: "Slider", value: "slider" },
          { label: "Switch", value: "switch" },
          { label: "Toggle Button", value: "togglebutton" },
        ],
      },
      rules: {
        type: "object",
        objectFields: {
          required: {
            type: "radio",
            options: [
              { label: "False", value: false },
              { label: "True", value: true },
            ],
          },
          pattern: {
            type: "text",
          },
        },
      },
      fieldProps: {
        type: "object",
        objectFields: {
          label: { type: "text" },
          //   orientation: { type: "text" },
          variant: {
            type: "select",
            options: [
              { label: "Standard", value: "standard" },
              { label: "Filled", value: "filled" },
              { label: "Outlined", value: "outlined" },
            ],
          },
          options: {
            type: "array",
            arrayFields: {
              value: {
                type: "text",
              },
              label: {
                type: "text",
              },
            },
          },
          multiline: {
            type: "radio",
            options: [
              { label: "False", value: false },
              { label: "True", value: true },
            ],
          },
          multiple: {
            type: "radio",
            options: [
              { label: "False", value: false },
              { label: "True", value: true },
            ],
          },
          row: {
            type: "radio",
            options: [
              { label: "False", value: false },
              { label: "True", value: true },
            ],
          },
          disabled: {
            type: "radio",
            options: [
              { label: "False", value: false },
              { label: "True", value: true },
            ],
          },
          rows: { type: "number" },
          type: {
            type: "select",
            options: [
              { label: "Text", value: "text" },
              { label: "Email", value: "email" },
              { label: "Color", value: "color" },
              { label: "Password", value: "password" },
            ],
          },
        },
      },
    },
  },
  appendJson: {
    type: "object",
    objectFields: {
      name: { type: "text" },
    },
  },
  formJsonData: {
    type: "object",
    objectFields: {
      formData: {
        type: "array",
        arrayFields: {
          name: { type: "text" },
          label: { type: "text" },
          helperText: { type: "text" },
          type: {
            type: "select",
            options: [
              { label: "None", value: "" },
              { label: "Input", value: "input" },
              { label: "CheckBox Group", value: "checkboxgroup" },
              { label: "CheckBox", value: "checkbox" },
              { label: "Radio", value: "radio" },
              { label: "Rich Text Editor", value: "RTEEditor" },
              { label: "Select", value: "select" },
              { label: "Slider", value: "slider" },
              { label: "Switch", value: "switch" },
              { label: "Toggle Button", value: "togglebutton" },
            ],
          },
          rules: {
            type: "object",
            objectFields: {
              required: {
                type: "radio",
                options: [
                  { label: "False", value: false },
                  { label: "True", value: true },
                ],
              },
              pattern: {
                type: "text",
              },
            },
          },
          fieldProps: {
            type: "object",
            objectFields: {
              label: { type: "text" },
              //   orientation: { type: "text" },
              variant: {
                type: "select",
                options: [
                  { label: "Standard", value: "standard" },
                  { label: "Filled", value: "filled" },
                  { label: "Outlined", value: "outlined" },
                ],
              },
              options: {
                type: "array",
                arrayFields: {
                  value: {
                    type: "text",
                  },
                  label: {
                    type: "text",
                  },
                },
              },
              multiline: {
                type: "radio",
                options: [
                  { label: "False", value: false },
                  { label: "True", value: true },
                ],
              },
              multiple: {
                type: "radio",
                options: [
                  { label: "False", value: false },
                  { label: "True", value: true },
                ],
              },
              row: {
                type: "radio",
                options: [
                  { label: "False", value: false },
                  { label: "True", value: true },
                ],
              },
              disabled: {
                type: "radio",
                options: [
                  { label: "False", value: false },
                  { label: "True", value: true },
                ],
              },
              rows: { type: "number" },
              type: {
                type: "select",
                options: [
                  { label: "Text", value: "text" },
                  { label: "Email", value: "email" },
                  { label: "Color", value: "color" },
                  { label: "Password", value: "password" },
                ],
              },
            },
          },
        },
      },
    },
  },
  storeValueAs: {
    type: "text",
  },
};
