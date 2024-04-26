import spacing from "../../../css/spacing.json";
import position from "../../../css/position.json";
import border from "../../../css/border.json";
import { FlexProperties } from "@/dashboard/editor/css/flex";

export const BoxConfig = {
  className: { type: "textarea" },
  sx: {
    type: "object",
    objectFields: {
      ...FlexProperties(),
      ...spacing,
      ...position,
      ...border,
    },
  },
};
