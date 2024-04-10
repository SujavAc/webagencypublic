import StackLayout from "@/components/Layout/Stack";
import { FormControl, FormHelperText, FormLabel, Rating } from "@mui/material";
import * as React from "react";
import { Controller } from "react-hook-form";

export default function RatingField({
  name,
  control,
  rules,
  fieldProps,
  helperText,
}) {
  const { label, ...restFieldProps } = fieldProps;
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl error={!!error}>
          <FormLabel component="legend">{label}</FormLabel>
          <StackLayout
            noOfItems={[
              <Rating
                name={name}
                value={parseInt(value) || 1}
                precision={0.5}
                {...restFieldProps}
                onChange={onChange}
                key={name}
              />,
              <FormHelperText error={!!error} key="helperText">
                {helperText}
              </FormHelperText>,
            ]}
            stackProps={{
              direction: "column",
              spacing: 1,
            }}
          />
        </FormControl>
      )}
    />
  );
}
