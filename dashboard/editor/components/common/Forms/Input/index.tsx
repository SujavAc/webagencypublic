"use client";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  TextField,
} from "@mui/material";
import { Controller } from "react-hook-form";

const InputField = ({ control, name, rules, fieldProps, ...rest }) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormControl error={!!error} variant="standard">
            <TextField
              helperText={error ? error.message : null}
              size="small"
              name={name}
              error={!!error}
              onChange={onChange}
              variant="outlined"
              value={value || ""}
              ref={rest?.ref}
              {...fieldProps}
            />
            <FormHelperText id="component-error-text">
              {rest.helperText}
            </FormHelperText>
          </FormControl>
        )}
      />
    </>
  );
};
export default InputField;
