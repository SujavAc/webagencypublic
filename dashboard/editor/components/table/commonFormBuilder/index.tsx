"use client";
import { Typography } from "@mui/material";
import { FormProps } from "@/types/form";
import FormWrapperV2 from "../../common/FormBuilder/FormWrapperV2";

const FormBuilder = (props: FormProps) => {
  const {
    id,
    title,
    onSubmit,
    defaultValues,
    appendJson,
    formJsonData,
    storeValueAs,
    formData,
  } = props;

  return (
    <div id={id}>
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
    </div>
  );
};
export default FormBuilder;
