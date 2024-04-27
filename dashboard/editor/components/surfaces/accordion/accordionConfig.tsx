import { FlexProperties } from "@/dashboard/editor/css/flex";
import Spacing from "@/dashboard/editor/css/spacing.json";

export const AccordionConfig = {
  noOfItems: {
    type: "array",
    arrayFields: {
      className: { type: "textarea" },
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
  sx: {
    type: "object",
    objectFields: {
      ...FlexProperties(),
      ...Spacing,
    },
  },
};
