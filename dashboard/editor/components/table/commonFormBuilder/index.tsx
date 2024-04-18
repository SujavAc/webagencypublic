"use client";
import { Typography } from "@mui/material";
import { FormProps } from "@/types/form";
import FormWrapperV2 from "../../common/FormBuilder/FormWrapperV2";

const FormBuilder = (props: FormProps) => {
  const {
    title,
    onSubmit,
    defaultValues,
    appendJson,
    formJsonData,
    storeValueAs,
    formData,
  } = props;

  return (
    <>
      <Typography variant="h6"> {title} </Typography>
      <FormWrapperV2
        formBuilderProps={{
          fieldNames: appendJson,
          formJsonData: formJsonData,
        }}
        formRendererProps={{
          formData: formData,
        }}
        storeValueAs={storeValueAs}
        onSubmit={onSubmit}
        defaultValues={defaultValues}
      />
    </>
  );
};
export default FormBuilder;
