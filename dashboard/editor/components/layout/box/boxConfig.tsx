import spacing from "../../../css/spacing.json";
import position from "../../../css/position.json";
import border from "../../../css/border.json";
// import { SpacedInput } from "@/dashboard/editor/editorFields";
import { FlexProperties } from "@/dashboard/editor/css/flex";

export const BoxConfig = {
  id: { type: "text" },
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
