import { SpacedInput } from "./editorFields";

export const overrides = {
  fieldType: {
    number: ({ name, value, onChange }) => (
      <SpacedInput
        type="number"
        label={name}
        value={value}
        fullWidth
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    ),
    text: ({ name, value, onChange }) => (
      <SpacedInput
        type="text"
        label={name}
        value={value}
        fullWidth
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    ),
    // ...
  },
};
