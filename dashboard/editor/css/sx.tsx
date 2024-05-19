import { FlexProperties } from "@/dashboard/editor/css/flex";
import Spacing from "@/dashboard/editor/css/spacing.json";
import Position from "@/dashboard/editor/css/position.json";
import Border from "@/dashboard/editor/css/border.json";
import Typography from "@/dashboard/editor/css/typography.json";
import { InteractionJson } from "@/dashboard/editor/css/interaction";
import { arrayToObject } from "@/utils/array";

export const sxConfig = {
  sx: {
    type: "object",
    objectFields: {
      ...FlexProperties(),
      ...Spacing,
      ...Position,
      ...Border,
      ...Typography,
      ...InteractionJson,
    },
  },
  resolveData: async ({ props }) => {
    return {
      props: {
        ...props,
        sx: {
          ...props.sx,
          ...(props?.sx?.interaction && arrayToObject(props?.sx?.interaction)),
        },
      },
    };
  },
};
