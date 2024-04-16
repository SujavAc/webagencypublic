import spacing from "../../../css/spacing.json";
import position from "../../../css/position.json";
import size from "../../../css/size.json";
import border from "../../../css/border.json";
import { SpacedInput } from "@/dashboard/editor/editorFields";
import { FlexProperties } from "@/dashboard/editor/css/flex";

export const BoxConfig = {
  className: { type: "textarea" },
  sx: {
    type: "object",
    objectFields: {
      ...FlexProperties(),
      ...spacing,
      ...position,
      ...size,
      ...border,
      color: {
        type: "custom",
        render: ({ onChange, value }) => (
          <SpacedInput
            type="color"
            label="Color"
            value={value}
            fullWidth
            onChange={(e) => onChange(e.currentTarget.value)}
          />
        ),
      },
      backgroundColor: {
        type: "custom",
        render: ({ onChange, value }) => (
          <SpacedInput
            type="color"
            label="Background Color"
            value={value}
            fullWidth
            onChange={(e) => onChange(e.currentTarget.value)}
          />
        ),
      },
    },
  },
};
