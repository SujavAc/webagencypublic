"use client";
import { Typography } from "@mui/material";
import FormWrapperV2 from "../../FormBuilder/FormWrapperV2";
import { FormProps } from "@/types/form";

const FeatureForm = (props: FormProps) => {
  const { title, onSubmit, defaultValues } = props;

  const appendJson = {
    name: "icon",
    title: "title",
    description: "paragraph",
  };

  const formJsonData = {
    formData: [
      {
        name: "icon",
        helperText: "This is required",
        type: "input",
        rules: {
          required: true,
        },
        fieldProps: {
          label: "Icon url or svg icon",
          variant: "outlined",
          mutiline: true,
          rows: 3,
        },
      },
      {
        name: "title",
        helperText: "This is required",
        type: "input",
        rules: {
          required: true,
        },
        fieldProps: {
          label: "Title",
          variant: "outlined",
        },
      },
      {
        name: "paragraph",
        helperText: "This is required",
        type: "rte",
        rules: {
          required: true,
        },
        fieldProps: {
          label: "Paragraph",
          variant: "outlined",
        },
      },
    ],
  };

  return (
    <>
      <Typography variant="h6"> {title} </Typography>
      <FormWrapperV2
        formBuilderProps={{
          fieldNames: appendJson,
          formJsonData: formJsonData,
        }}
        storeValueAs="features"
        onSubmit={onSubmit}
        defaultValues={defaultValues}
      />
    </>
  );
};
export default FeatureForm;
