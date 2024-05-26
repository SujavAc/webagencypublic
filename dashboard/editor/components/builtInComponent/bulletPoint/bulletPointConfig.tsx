import { IconConfig } from "../../Icon/iconConfig";

export const BulletPointConfig = {
  id: { type: "text" },
  className: { type: "textarea" },
  text: { type: "textarea" },
  iconProps: {
    type: "object",
    objectFields: {
      ...IconConfig,
    },
  },
};
