"use client";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import { Controller } from "react-hook-form";

const CheckboxField = ({
  control,
  name,
  helperText,
  rules,
  fieldProps,
  ...rest
}) => {
  const { label, ...restFieldProps } = fieldProps;
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl error={!!error} component="fieldset">
          <FormControlLabel
            control={
              <Checkbox
                onChange={onChange}
                name={name}
                checked={value || false}
                {...restFieldProps}
              />
            }
            label={label}
          />
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      )}
    />
  );
};
export default CheckboxField;
