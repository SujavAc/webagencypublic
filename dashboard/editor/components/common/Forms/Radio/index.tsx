"use client";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Controller } from "react-hook-form";

const RadioField = ({ control, name, rules, fieldProps, ...rest }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl error={!!error} component="fieldset" variant="standard">
          <FormLabel id={fieldProps?.label}>{fieldProps?.label}</FormLabel>
          <RadioGroup
            row
            aria-labelledby={name}
            defaultValue=""
            name={value}
            onChange={onChange}
          >
            {fieldProps?.options?.map(({ value, label }, index) => (
              <FormControlLabel
                value={value}
                key={index}
                control={<Radio name={label} />}
                label={label}
              />
            ))}
          </RadioGroup>
          {rest?.helperText && (
            <FormHelperText>{rest.helperText}</FormHelperText>
          )}
        </FormControl>
      )}
      {...rest}
    />
  );
};
export default RadioField;
