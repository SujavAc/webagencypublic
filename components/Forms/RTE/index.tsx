import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import RTE from "@/components/Common/RTE";
import { Controller } from "react-hook-form";

interface RTEEditor {
  control?: any;
  name: string;
  rules?: any;
  fieldProps?: any;
  label?: string;
  helperText?: string;
}

export default function RTEEditor(props: RTEEditor) {
  const { control, name, rules, fieldProps, helperText, ...rest } = props;
  //   const [rteData, setRteData] = useState<any>(value);
  const theme = useTheme();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl
          error={!!error}
          variant="outlined"
          sx={{ maxWidth: "100%" }}
        >
          <RTE
            updatedData={onChange}
            contentData={value}
            title={fieldProps?.label}
            style={error && { border: `1px solid ${theme.palette.error.main}` }}
            error={!!error}
          ></RTE>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      )}
    />
  );
}
