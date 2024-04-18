"use client";
import { Typography } from "@mui/material";
import FormRender from "../../FormRenderer";
import { ContactDetailFormData } from "./ContactDetailData";
import FormControl from "../../FormBuilder/FormControl";
import FormWrapperV2 from "../../FormBuilder/FormWrapperV2";
import { useSnackbar } from "notistack";
import { notiStack } from "@/store/action/notistackAction";

interface ISignInFormProps {
  title: string;
}

const ContactDetailForm = (props: ISignInFormProps) => {
  const { title } = props;
  const { control } = FormControl({});
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = (data) => {
    let notiStackData: notiStack = {
      message: "Failed to submit in contact details form, please try again",
      variant: "error",
    };
    enqueueSnackbar(notiStackData);
  };

  return (
    <>
      <Typography variant="h6"> {title} </Typography>
      <FormWrapperV2
        formRendererProps={{ formData: ContactDetailFormData.formData }}
        onSubmit={onSubmit}
      ></FormWrapperV2>
    </>
  );
};
export default ContactDetailForm;
