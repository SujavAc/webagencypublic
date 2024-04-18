"use client";
import { Typography } from "@mui/material";
import { HeroBannerFormData } from "./HeroBannerData";
import FormWrapperV2 from "../../FormBuilder/FormWrapperV2";

interface IHeroBannerFormProps {
  title: string;
  defaultValues?: any;
  onSubmit: (data: any) => void;
}

const HeroBannerForm = (props: IHeroBannerFormProps) => {
  const { title, defaultValues, onSubmit } = props;

  const appendJson = {
    name: "buttonLabel",
    path: "buttonPathUrl",
  };

  const formJsonData = {
    formData: [
      {
        name: "label",
        helperText: "This is required",
        type: "input",
        rules: {
          required: true,
        },
        fieldProps: {
          label: "Button label",
          variant: "outlined",
        },
      },
      {
        name: "href",
        helperText: "This is required",
        type: "input",
        rules: {
          required: true,
        },
        fieldProps: {
          label: "Button path url",
          variant: "outlined",
        },
      },
      {
        name: "openInNewTab",
        helperText: "",
        type: "checkbox",
        rules: {
          required: false,
        },
        fieldProps: {
          label: "Open in new tab",
          value: false,
        },
      },
    ],
  };

  return (
    <>
      <Typography variant="h6"> {title} </Typography>
      <FormWrapperV2
        formRendererProps={{
          formData: HeroBannerFormData.formData,
        }}
        formBuilderProps={{
          fieldNames: appendJson,
          formJsonData: formJsonData,
        }}
        storeValueAs="buttons"
        onSubmit={onSubmit}
        defaultValues={defaultValues}
      />
    </>
  );
};

export default HeroBannerForm;
