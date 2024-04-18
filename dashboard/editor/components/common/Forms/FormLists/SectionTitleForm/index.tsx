"use client";
import { Typography } from "@mui/material";
import { SectionTitleFormData } from "./SectionTitleData";
import FormWrapperV2 from "../../FormBuilder/FormWrapperV2";

interface ISectionTitleFormProps {
  title: string;
  defaultValues?: any;
  onSubmit: (data: any) => void;
}

const SectionTitleForm = (props: ISectionTitleFormProps) => {
  const { title, onSubmit, defaultValues } = props;

  return (
    <>
      <Typography variant="h6"> {title}</Typography>
      <FormWrapperV2
        formRendererProps={{ formData: SectionTitleFormData.formData }}
        onSubmit={onSubmit}
        defaultValues={defaultValues}
      ></FormWrapperV2>
    </>
  );
};
export default SectionTitleForm;
