export const StorageConfig = {
  id: { type: "text" },
  title: {
    type: "text",
  },
  itemsPerPage: {
    type: "number",
  },
  isGalleryView: {
    type: "radio",
    options: [
      { label: "False", value: false },
      { label: "True", value: true },
    ],
  },
  allowFileUpload: {
    type: "radio",
    options: [
      { label: "False", value: false },
      { label: "True", value: true },
    ],
  },
  storagePath: { type: "text" },
};
