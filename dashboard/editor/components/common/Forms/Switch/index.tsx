"use client";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Switch,
} from "@mui/material";
import { Controller } from "react-hook-form";

const SwitchField = ({ control, name, rules, fieldProps, ...rest }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl error={!!error} component="fieldset" variant="standard">
          <FormLabel component="legend">{fieldProps?.label}</FormLabel>
          <FormGroup aria-label="position" row>
            {/* {rest?.options.map((option) => <FormControlLabel
                        key={option?.value}
                        control={<Switch color="primary" checked={option.value === value} onChange={onChange} name={name}/>}
                        label={option?.label}
                        {...fieldProps}
                    />)} */}
            <Switch
              color="primary"
              checked={value || false}
              onChange={onChange}
              name={name}
              {...fieldProps}
            />
          </FormGroup>
          <FormHelperText>{rest?.helperText}</FormHelperText>
        </FormControl>
      )}
    />
  );
};
export default SwitchField;
