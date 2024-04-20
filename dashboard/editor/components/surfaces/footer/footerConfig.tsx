export const FooterConfig = {
  paragraph: { type: "text" },
  companyName: { type: "text" },
  logoImageUrl: {
    type: "text",
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
