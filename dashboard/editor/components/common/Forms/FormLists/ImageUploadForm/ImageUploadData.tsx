export const imageUploadFormData = {
  "formData": [
    {
      name: "files",
      helperText: "Upload your logo here.",
      type: "fileupload",
      rules: {
        required: true,
      },
      fieldProps: {
        label: "Upload your logo image",
        variant: "outlined",
      },
      displayImages: true,
    }
  ]
}
