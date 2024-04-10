import { SpacedInput } from "@/dashboard/editor/editorFields";

export const AvatarConfig = {
  alt: {
    type: "custom",
    render: ({ onChange, value }) => (
      <SpacedInput
        type="text"
        label="Alt"
        value={value}
        fullWidth
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    ),
  },
  children: {
    type: "custom",
    render: ({ onChange, value }) => (
      <SpacedInput
        type="text"
        label="Children"
        value={value}
        fullWidth
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    ),
  },
  src: {
    type: "custom",
    render: ({ onChange, value }) => (
      <SpacedInput
        type="text"
        label="Source Url"
        value={value}
        fullWidth
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    ),
  },
  srcSet: {
    type: "custom",
    render: ({ onChange, value }) => (
      <SpacedInput
        type="text"
        label="Src Set"
        value={value}
        fullWidth
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    ),
  },
  variant: {
    type: "custom",
    render: ({ onChange, value }) => (
      <SpacedInput
        type="array"
        label="Variant"
        value={value}
        options={[
          { label: "Circular", value: "circular" },
          { label: "Rounded", value: "rounded" },
          { label: "Square", value: "square" },
          // Add more options as needed
        ]}
        onChange={(e) => onChange(e.target.value)}
      />
    ),
  },
};
