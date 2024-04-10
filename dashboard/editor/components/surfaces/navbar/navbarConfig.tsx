export const NavbarConfig = {
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
                }
            }
        }
      }
    },
  },
};
