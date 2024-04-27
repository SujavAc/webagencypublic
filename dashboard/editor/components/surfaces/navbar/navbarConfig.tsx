export const NavbarConfig = {
  id: { type: "text" },
  menuData: {
    type: "array",
    arrayFields: {
      title: { type: "text" },
      path: { type: "text" },
      newTab: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
      submenu: {
        type: "array",
        arrayFields: {
          title: { type: "text" },
          path: { type: "text" },
          newTab: {
            type: "radio",
            options: [
              { label: "False", value: false },
              { label: "True", value: true },
            ],
          },
          submenu: {
            type: "array",
            arrayFields: {
              title: { type: "text" },
              path: { type: "text" },
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
    },
  },
  logoImageUrl: {
    type: "text",
  },
  logoImageSvg: {
    type: "textarea",
  },
  isAuthemticationRequired: {
    type: "radio",
    options: [
      { label: "False", value: false },
      { label: "True", value: true },
    ],
  },
};
