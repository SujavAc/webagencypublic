import StackLayout from "@/components/Layout/Stack";
import { FormHelperText, Slider } from "@mui/material";
import * as React from "react";
import { Controller } from "react-hook-form";

export default function SliderField({
  name,
  control,
  rules,
  fieldProps,
  ...rest
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <StackLayout
          noOfItems={[
            <Slider
              aria-label={name}
              value={value || 0}
              onChange={onChange}
              marks={fieldProps?.marks || fieldProps?.options}
              valueLabelDisplay="auto"
              {...fieldProps}
              sx={{
                minHeight:
                  fieldProps?.orientation === "vertical" ? "200px" : "0px",
                ...fieldProps?.sx,
              }}
              key={name}
            />,
            <FormHelperText error={!!error} key="helperText">
              {rest?.helperText}
            </FormHelperText>,
          ]}
          stackProps={{
            direction: "column",
            spacing: 3,
          }}
        />
      )}
    />
  );
}
