export const FooterConfig = {
  id: { type: "text" },
  paragraph: { type: "text" },
  companyName: { type: "text" },
  logoImageUrl: {
    type: "text",
  },
  logoImageSvg: {
    type: "textarea",
  },
  links: {
    type: "array",
    arrayFields: {
      title: { type: "text" },
      menuData: {
        type: "array",
        arrayFields: {
          label: { type: "text" },
          href: { type: "text" },
          newTab: {
            type: "radio",
            options: [
              { label: "False", value: false },
              { label: "True", value: true },
            ],
          },
        },
      },
    },
  },
};
