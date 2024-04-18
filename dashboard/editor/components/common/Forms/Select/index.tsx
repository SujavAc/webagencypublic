"use client";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Controller } from "react-hook-form";

const SelectField = ({ control, name, rules, fieldProps, ...rest }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl error={!!error} sx={{ minWidth: 200 }}>
          <InputLabel id={name}>{fieldProps?.label}</InputLabel>
          <Select
            labelId={name}
            id={name}
            value={value || (fieldProps?.multiple ? [] : "")}
            name={name}
            onChange={onChange}
            autoWidth
            {...fieldProps}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {fieldProps?.options?.map((option, index) => (
              <MenuItem key={option?.label || index} value={option?.value}>
                {option?.label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{rest?.helperText}</FormHelperText>
        </FormControl>
      )}
    />
  );
};
export default SelectField;
