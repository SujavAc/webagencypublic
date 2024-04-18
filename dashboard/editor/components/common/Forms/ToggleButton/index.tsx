"use client";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { Controller } from "react-hook-form";

const ToggleButtonField = ({ control, name, rules, fieldProps, ...rest }) => {
  const { options, label, ...restFieldProps } = fieldProps;
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl error={!!error}>
          <FormLabel component="label" sx={{ marginBottom: 1 }}>
            {label}
          </FormLabel>
          <ToggleButtonGroup
            value={value}
            exclusive
            onChange={onChange}
            {...restFieldProps}
          >
            {options?.map((option) => (
              <ToggleButton
                key={option?.value}
                value={option?.value}
                aria-label={option?.value}
              >
                {option?.label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
          <FormHelperText>{rest?.helperText}</FormHelperText>
        </FormControl>
      )}
    />
  );
};
export default ToggleButtonField;
