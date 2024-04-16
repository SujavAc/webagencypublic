import { SpacedInput } from "../editorFields";

export const FlexProperties = () => ({
  display: {
    type: "object",
    objectFields: {
      xs: {
        type: "select",
        options: [
          { label: "None", value: "none" },
          { label: "Block", value: "block" },
          { label: "Inline", value: "inline" },
          { label: "Inline Block", value: "inline-block" },
          { label: "Flex", value: "flex" },
          { label: "Inline Flex", value: "inline-flex" },
          { label: "Grid", value: "grid" },
          { label: "Inline Grid", value: "inline-grid" },
          { label: "Table", value: "table" },
          { label: "Table Cell", value: "table-cell" },
          { label: "Table Row", value: "table-row" },
          { label: "Table Header Group", value: "table-header-group" },
          { label: "Table Footer Group", value: "table-footer-group" },
          { label: "Table Row Group", value: "table-row-group" },
          { label: "Table Column", value: "table-column" },
          { label: "Table Column Group", value: "table-column-group" },
          { label: "Initial", value: "initial" },
          { label: "Inherit", value: "inherit" },
          { label: "Unset", value: "unset" },
        ],
      },
      sm: {
        type: "select",
        options: [
          { label: "None", value: "none" },
          { label: "Block", value: "block" },
          { label: "Inline", value: "inline" },
          { label: "Inline Block", value: "inline-block" },
          { label: "Flex", value: "flex" },
          { label: "Inline Flex", value: "inline-flex" },
          { label: "Grid", value: "grid" },
          { label: "Inline Grid", value: "inline-grid" },
          { label: "Table", value: "table" },
          { label: "Table Cell", value: "table-cell" },
          { label: "Table Row", value: "table-row" },
          { label: "Table Header Group", value: "table-header-group" },
          { label: "Table Footer Group", value: "table-footer-group" },
          { label: "Table Row Group", value: "table-row-group" },
          { label: "Table Column", value: "table-column" },
          { label: "Table Column Group", value: "table-column-group" },
          { label: "Initial", value: "initial" },
          { label: "Inherit", value: "inherit" },
          { label: "Unset", value: "unset" },
        ],
      },
      md: {
        type: "select",
        options: [
          { label: "None", value: "none" },
          { label: "Block", value: "block" },
          { label: "Inline", value: "inline" },
          { label: "Inline Block", value: "inline-block" },
          { label: "Flex", value: "flex" },
          { label: "Inline Flex", value: "inline-flex" },
          { label: "Grid", value: "grid" },
          { label: "Inline Grid", value: "inline-grid" },
          { label: "Table", value: "table" },
          { label: "Table Cell", value: "table-cell" },
          { label: "Table Row", value: "table-row" },
          { label: "Table Header Group", value: "table-header-group" },
          { label: "Table Footer Group", value: "table-footer-group" },
          { label: "Table Row Group", value: "table-row-group" },
          { label: "Table Column", value: "table-column" },
          { label: "Table Column Group", value: "table-column-group" },
          { label: "Initial", value: "initial" },
          { label: "Inherit", value: "inherit" },
          { label: "Unset", value: "unset" },
        ],
      },
      lg: {
        type: "select",
        options: [
          { label: "None", value: "none" },
          { label: "Block", value: "block" },
          { label: "Inline", value: "inline" },
          { label: "Inline Block", value: "inline-block" },
          { label: "Flex", value: "flex" },
          { label: "Inline Flex", value: "inline-flex" },
          { label: "Grid", value: "grid" },
          { label: "Inline Grid", value: "inline-grid" },
          { label: "Table", value: "table" },
          { label: "Table Cell", value: "table-cell" },
          { label: "Table Row", value: "table-row" },
          { label: "Table Header Group", value: "table-header-group" },
          { label: "Table Footer Group", value: "table-footer-group" },
          { label: "Table Row Group", value: "table-row-group" },
          { label: "Table Column", value: "table-column" },
          { label: "Table Column Group", value: "table-column-group" },
          { label: "Initial", value: "initial" },
          { label: "Inherit", value: "inherit" },
          { label: "Unset", value: "unset" },
        ],
      },
    },
  },
  flexDirection: {
    type: "object",
    objectFields: {
      xs: {
        type: "custom",
        render: ({ onChange, value }) => (
          <SpacedInput
            type="togglebutton"
            label="XS"
            value={value}
            options={[
              { icon: "ArrowForward", value: "row" },
              { icon: "ArrowDownward", value: "column" },
              { icon: "SwapHoriz", value: "row-reverse" },
              { icon: "SwapVert", value: "column-reverse" },
              { label: "Initial", value: "initial" },
              { label: "Inherit", value: "inherit" },
              { label: "Unset", value: "unset" },
              // Add more options as needed
            ]}
            orientation="vertical"
            size="small"
            onChange={(e) => onChange(e.currentTarget.value || "")}
          />
        ),
      },
      sm: {
        type: "custom",
        render: ({ onChange, value }) => (
          <SpacedInput
            type="togglebutton"
            label="SM"
            value={value}
            options={[
              { icon: "ArrowForward", value: "row" },
              { icon: "ArrowDownward", value: "column" },
              { icon: "SwapHoriz", value: "row-reverse" },
              { icon: "SwapVert", value: "column-reverse" },
              { label: "Initial", value: "initial" },
              { label: "Inherit", value: "inherit" },
              { label: "Unset", value: "unset" },
              // Add more options as needed
            ]}
            orientation="vertical"
            size="small"
            onChange={(e) => onChange(e.currentTarget.value)}
          />
        ),
      },
      md: {
        type: "custom",
        render: ({ onChange, value }) => (
          <SpacedInput
            type="togglebutton"
            label="MD"
            value={value}
            options={[
              { icon: "ArrowForward", value: "row" },
              { icon: "ArrowDownward", value: "column" },
              { icon: "SwapHoriz", value: "row-reverse" },
              { icon: "SwapVert", value: "column-reverse" },
              { label: "Initial", value: "initial" },
              { label: "Inherit", value: "inherit" },
              { label: "Unset", value: "unset" },
              // Add more options as needed
            ]}
            orientation="vertical"
            size="small"
            onChange={(e) => onChange(e.currentTarget.value)}
          />
        ),
      },
      lg: {
        type: "custom",
        render: ({ onChange, value }) => (
          <SpacedInput
            type="togglebutton"
            label="LG"
            value={value}
            options={[
              { icon: "ArrowForward", value: "row" },
              { icon: "ArrowDownward", value: "column" },
              { icon: "SwapHoriz", value: "row-reverse" },
              { icon: "SwapVert", value: "column-reverse" },
              { label: "Initial", value: "initial" },
              { label: "Inherit", value: "inherit" },
              { label: "Unset", value: "unset" },
              // Add more options as needed
            ]}
            orientation="vertical"
            size="small"
            onChange={(e) => onChange(e.currentTarget.value)}
          />
        ),
      },
    },
  },
  flexWrap: {
    type: "object",
    objectFields: {
      xs: {
        type: "select",
        options: [
          { label: "No Wrap", value: "nowrap" },
          { label: "Wrap", value: "wrap" },
          { label: "Wrap Reverse", value: "wrap-reverse" },
          { label: "Initial", value: "initial" },
          { label: "Inherit", value: "inherit" },
          { label: "Unset", value: "unset" },
        ],
      },
      sm: {
        type: "select",
        options: [
          { label: "No Wrap", value: "nowrap" },
          { label: "Wrap", value: "wrap" },
          { label: "Wrap Reverse", value: "wrap-reverse" },
          { label: "Initial", value: "initial" },
          { label: "Inherit", value: "inherit" },
          { label: "Unset", value: "unset" },
        ],
      },
      md: {
        type: "select",
        options: [
          { label: "No Wrap", value: "nowrap" },
          { label: "Wrap", value: "wrap" },
          { label: "Wrap Reverse", value: "wrap-reverse" },
          { label: "Initial", value: "initial" },
          { label: "Inherit", value: "inherit" },
          { label: "Unset", value: "unset" },
        ],
      },
      lg: {
        type: "select",
        options: [
          { label: "No Wrap", value: "nowrap" },
          { label: "Wrap", value: "wrap" },
          { label: "Wrap Reverse", value: "wrap-reverse" },
          { label: "Initial", value: "initial" },
          { label: "Inherit", value: "inherit" },
          { label: "Unset", value: "unset" },
        ],
      },
    },
  },
  justifyContent: {
    type: "object",
    objectFields: {
      xs: {
        type: "select",
        options: [
          { label: "Flex Start", value: "flex-start" },
          { label: "Flex End", value: "flex-end" },
          { label: "Center", value: "center" },
          { label: "Space Between", value: "space-between" },
          { label: "Space Around", value: "space-around" },
          { label: "Space Evenly", value: "space-evenly" },
          { label: "Initial", value: "initial" },
          { label: "Inherit", value: "inherit" },
          { label: "Unset", value: "unset" },
        ],
      },
      sm: {
        type: "select",
        options: [
          { label: "Flex Start", value: "flex-start" },
          { label: "Flex End", value: "flex-end" },
          { label: "Center", value: "center" },
          { label: "Space Between", value: "space-between" },
          { label: "Space Around", value: "space-around" },
          { label: "Space Evenly", value: "space-evenly" },
          { label: "Initial", value: "initial" },
          { label: "Inherit", value: "inherit" },
          { label: "Unset", value: "unset" },
        ],
      },
      md: {
        type: "select",
        options: [
          { label: "Flex Start", value: "flex-start" },
          { label: "Flex End", value: "flex-end" },
          { label: "Center", value: "center" },
          { label: "Space Between", value: "space-between" },
          { label: "Space Around", value: "space-around" },
          { label: "Space Evenly", value: "space-evenly" },
          { label: "Initial", value: "initial" },
          { label: "Inherit", value: "inherit" },
          { label: "Unset", value: "unset" },
        ],
      },
      lg: {
        type: "select",
        options: [
          { label: "Flex Start", value: "flex-start" },
          { label: "Flex End", value: "flex-end" },
          { label: "Center", value: "center" },
          { label: "Space Between", value: "space-between" },
          { label: "Space Around", value: "space-around" },
          { label: "Space Evenly", value: "space-evenly" },
          { label: "Initial", value: "initial" },
          { label: "Inherit", value: "inherit" },
          { label: "Unset", value: "unset" },
        ],
      },
    },
  },
  alignItems: {
    type: "object",
    objectFields: {
      xs: {
        type: "select",
        options: [
          { label: "Flex Start", value: "flex-start" },
          { label: "Flex End", value: "flex-end" },
          { label: "Center", value: "center" },
          { label: "Baseline", value: "baseline" },
          { label: "Stretch", value: "stretch" },
          { label: "Initial", value: "initial" },
          { label: "Inherit", value: "inherit" },
          { label: "Unset", value: "unset" },
        ],
      },
      sm: {
        type: "select",
        options: [
          { label: "Flex Start", value: "flex-start" },
          { label: "Flex End", value: "flex-end" },
          { label: "Center", value: "center" },
          { label: "Baseline", value: "baseline" },
          { label: "Stretch", value: "stretch" },
          { label: "Initial", value: "initial" },
          { label: "Inherit", value: "inherit" },
          { label: "Unset", value: "unset" },
        ],
      },
      md: {
        type: "select",
        options: [
          { label: "Flex Start", value: "flex-start" },
          { label: "Flex End", value: "flex-end" },
          { label: "Center", value: "center" },
          { label: "Baseline", value: "baseline" },
          { label: "Stretch", value: "stretch" },
          { label: "Initial", value: "initial" },
          { label: "Inherit", value: "inherit" },
          { label: "Unset", value: "unset" },
        ],
      },
      lg: {
        type: "select",
        options: [
          { label: "Flex Start", value: "flex-start" },
          { label: "Flex End", value: "flex-end" },
          { label: "Center", value: "center" },
          { label: "Baseline", value: "baseline" },
          { label: "Stretch", value: "stretch" },
          { label: "Initial", value: "initial" },
          { label: "Inherit", value: "inherit" },
          { label: "Unset", value: "unset" },
        ],
      },
    },
  },
  alignContent: {
    type: "object",
    objectFields: {
      xs: {
        type: "select",
        options: [
          { label: "Flex Start", value: "flex-start" },
          { label: "Flex End", value: "flex-end" },
          { label: "Center", value: "center" },
          { label: "Space Between", value: "space-between" },
          { label: "Space Around", value: "space-around" },
          { label: "Stretch", value: "stretch" },
          { label: "Initial", value: "initial" },
          { label: "Inherit", value: "inherit" },
          { label: "Unset", value: "unset" },
        ],
      },
      sm: {
        type: "select",
        options: [
          { label: "Flex Start", value: "flex-start" },
          { label: "Flex End", value: "flex-end" },
          { label: "Center", value: "center" },
          { label: "Space Between", value: "space-between" },
          { label: "Space Around", value: "space-around" },
          { label: "Stretch", value: "stretch" },
          { label: "Initial", value: "initial" },
          { label: "Inherit", value: "inherit" },
          { label: "Unset", value: "unset" },
        ],
      },
      md: {
        type: "select",
        options: [
          { label: "Flex Start", value: "flex-start" },
          { label: "Flex End", value: "flex-end" },
          { label: "Center", value: "center" },
          { label: "Space Between", value: "space-between" },
          { label: "Space Around", value: "space-around" },
          { label: "Stretch", value: "stretch" },
          { label: "Initial", value: "initial" },
          { label: "Inherit", value: "inherit" },
          { label: "Unset", value: "unset" },
        ],
      },
      lg: {
        type: "select",
        options: [
          { label: "Flex Start", value: "flex-start" },
          { label: "Flex End", value: "flex-end" },
          { label: "Center", value: "center" },
          { label: "Space Between", value: "space-between" },
          { label: "Space Around", value: "space-around" },
          { label: "Stretch", value: "stretch" },
          { label: "Initial", value: "initial" },
          { label: "Inherit", value: "inherit" },
          { label: "Unset", value: "unset" },
        ],
      },
    },
  },
  alignSelf: {
    type: "object",
    objectFields: {
      xs: {
        type: "select",
        options: [
          { label: "Auto", value: "auto" },
          { label: "Flex Start", value: "flex-start" },
          { label: "Flex End", value: "flex-end" },
          { label: "Center", value: "center" },
          { label: "Baseline", value: "baseline" },
          { label: "Stretch", value: "stretch" },
          { label: "Initial", value: "initial" },
          { label: "Inherit", value: "inherit" },
          { label: "Unset", value: "unset" },
        ],
      },
      sm: {
        type: "select",
        options: [
          { label: "Auto", value: "auto" },
          { label: "Flex Start", value: "flex-start" },
          { label: "Flex End", value: "flex-end" },
          { label: "Center", value: "center" },
          { label: "Baseline", value: "baseline" },
          { label: "Stretch", value: "stretch" },
          { label: "Initial", value: "initial" },
          { label: "Inherit", value: "inherit" },
          { label: "Unset", value: "unset" },
        ],
      },
      md: {
        type: "select",
        options: [
          { label: "Auto", value: "auto" },
          { label: "Flex Start", value: "flex-start" },
          { label: "Flex End", value: "flex-end" },
          { label: "Center", value: "center" },
          { label: "Baseline", value: "baseline" },
          { label: "Stretch", value: "stretch" },
          { label: "Initial", value: "initial" },
          { label: "Inherit", value: "inherit" },
          { label: "Unset", value: "unset" },
        ],
      },
      lg: {
        type: "select",
        options: [
          { label: "Auto", value: "auto" },
          { label: "Flex Start", value: "flex-start" },
          { label: "Flex End", value: "flex-end" },
          { label: "Center", value: "center" },
          { label: "Baseline", value: "baseline" },
          { label: "Stretch", value: "stretch" },
          { label: "Initial", value: "initial" },
          { label: "Inherit", value: "inherit" },
          { label: "Unset", value: "unset" },
        ],
      },
    },
  },
  gap: {
    type: "object",
    objectFields: {
      xs: {
        type: "number",
      },
      sm: {
        type: "number",
      },
      md: {
        type: "number",
      },
      lg: {
        type: "number",
      },
    },
  },
  overflow: {
    type: "select",
    options: [
      { label: "Visible", value: "visible" },
      { label: "Hidden", value: "hidden" },
      { label: "Scroll", value: "scroll" },
      { label: "Auto", value: "auto" },
      { label: "Initial", value: "initial" },
      { label: "Inherit", value: "inherit" },
      { label: "Unset", value: "unset" },
    ],
  },
  overflowX: {
    type: "select",
    options: [
      { label: "Visible", value: "visible" },
      { label: "Hidden", value: "hidden" },
      { label: "Scroll", value: "scroll" },
      { label: "Auto", value: "auto" },
      { label: "Initial", value: "initial" },
      { label: "Inherit", value: "inherit" },
      { label: "Unset", value: "unset" },
    ],
  },
  overflowY: {
    type: "select",
    options: [
      { label: "Visible", value: "visible" },
      { label: "Hidden", value: "hidden" },
      { label: "Scroll", value: "scroll" },
      { label: "Auto", value: "auto" },
      { label: "Initial", value: "initial" },
      { label: "Inherit", value: "inherit" },
      { label: "Unset", value: "unset" },
    ],
  },
});
