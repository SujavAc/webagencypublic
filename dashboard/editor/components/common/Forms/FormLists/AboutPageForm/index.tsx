"use client";
import { Typography } from "@mui/material";
import { AboutPageFormData } from "./AboutPageFormData";
import FormWrapperV2 from "../../FormBuilder/FormWrapperV2";
import { notiStack } from "@/store/action/notistackAction";
import { useSnackbar } from "notistack";

interface ISignInFormProps {
  title: string;
}

const AboutPageForm = (props: ISignInFormProps) => {
  const { title } = props;
  const { enqueueSnackbar } = useSnackbar();
  const { defaultValues, formData } = AboutPageFormData;

  const onSubmit = (data) => {
    let notiStackData: notiStack = {
      message: "Failed to submit in about us page, please try again",
      variant: "error",
    };
    enqueueSnackbar(notiStackData);
  };

  return (
    <>
      <Typography variant="h6"> {title}</Typography>
      <FormWrapperV2
        formRendererProps={{ formData }}
        onSubmit={onSubmit}
        defaultValues={defaultValues}
      ></FormWrapperV2>
    </>
  );
};
export default AboutPageForm;
