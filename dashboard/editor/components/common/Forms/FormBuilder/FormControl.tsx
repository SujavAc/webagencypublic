import React from "react";
import { useForm } from "react-hook-form";

const FormControl = (defaultValue: any) => {
  const { control, handleSubmit, ...rest } = useForm(
    { defaultValues: defaultValue } || {},
  );

  return {
    control,
    handleSubmit,
    ...rest,
  };
};

export default FormControl;
