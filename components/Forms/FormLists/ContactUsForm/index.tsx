"use client";
import { Typography } from "@mui/material";
import FormWrapperV2 from "../../FormBuilder/FormWrapperV2";
import { ContactUsFormData } from "./ContactUsFormData";
import { FormProps } from "@/types/form";

const ContactUsForm = (props: FormProps) => {
  const { title, defaultValues, onSubmit } = props;

  return (
    <>
      <Typography variant="h6"> {title} </Typography>
      <FormWrapperV2
        formRendererProps={{ formData: ContactUsFormData.formData }}
        onSubmit={onSubmit}
        defaultValues={defaultValues}
      ></FormWrapperV2>
    </>
  );
};
export default ContactUsForm;
