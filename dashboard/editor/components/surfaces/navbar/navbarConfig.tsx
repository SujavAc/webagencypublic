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
      isAuthenticated: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
      icon: { type: "text" },
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
          isAuthenticated: {
            type: "radio",
            options: [
              { label: "False", value: false },
              { label: "True", value: true },
            ],
          },
          icon: { type: "text" },
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
              isAuthenticated: {
                type: "radio",
                options: [
                  { label: "False", value: false },
                  { label: "True", value: true },
                ],
              },
              icon: { type: "text" },
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
  enableLogoutButton: {
    type: "radio",
    options: [
      { label: "False", value: false },
      { label: "True", value: true },
    ],
  },
};
