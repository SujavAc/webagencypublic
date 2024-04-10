import flex from "../../../css/flex.json";
import spacing from "../../../css/spacing.json";
import position from "../../../css/position.json";
import size from "../../../css/size.json";
import border from "../../../css/border.json";
import { SpacedInput } from "@/dashboard/editor/editorFields";

export const BoxConfig = {
  sx: {
    type: "object",
    objectFields: {
      ...flex,
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
