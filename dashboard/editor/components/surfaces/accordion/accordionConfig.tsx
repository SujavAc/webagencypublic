export const AccordionConfig = {
  noOfItems: {
    type: "array",
    arrayFields: {
      heading: {
        type: "text",
      },
      headingIcon: {
        type: "text",
      },
      defaultOpen: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
    },
  },
};
