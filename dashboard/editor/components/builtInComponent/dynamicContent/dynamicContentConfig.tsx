export const DynamicContentConfig = {
  id: { type: "text" },
  className: { type: "textarea" },
  limit: { type: "number" },
  databasePath: { type: "text" },
  dynamicValue: {
    type: "radio",
    options: [
      { label: "False", value: false },
      { label: "True", value: true },
    ],
  },
  loadMoreButton: {
    type: "radio",
    options: [
      { label: "False", value: false },
      { label: "True", value: true },
    ],
  },
};
