"use client";
import { Typography } from "@mui/material";
import FormWrapperV2 from "../../FormBuilder/FormWrapperV2";
import { navigationFormData } from "./NavigationFormData";
import { notiStack } from "@/store/action/notistackAction";
import { useSnackbar } from "notistack";

interface ISignInFormProps {
  title: string;
}

const NavigationForm = (props: ISignInFormProps) => {
  const { title } = props;
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = (data) => {
    let notiStackData: notiStack = {
      message: "Failed to submit on navigation form, please try again",
      variant: "error",
    };
    enqueueSnackbar(notiStackData);
  };

  const appendJson = {
    name: "menuLabel",
    path: "menuPath",
    newTab: "openInNewTab",
  };

  const formJsonData = {
    formData: [
      {
        name: "menuLabel",
        helperText: "This is required",
        type: "input",
        rules: {
          required: false,
        },
        fieldProps: {
          label: "Sub menu label",
          variant: "outlined",
        },
      },
      {
        name: "menuPath",
        helperText: "This is required",
        type: "input",
        rules: {
          required: false,
        },
        fieldProps: {
          label: "Menu Path url",
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
          formData: navigationFormData.formData,
        }}
        formBuilderProps={{
          fieldNames: appendJson,
          formJsonData: formJsonData,
        }}
        storeValueAs="menuItems"
        onSubmit={onSubmit}
      />
    </>
  );
};
export default NavigationForm;
