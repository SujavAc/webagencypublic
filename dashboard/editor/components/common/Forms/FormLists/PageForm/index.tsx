"use client";
import { Typography } from "@mui/material";
import FormWrapperV2 from "../../FormBuilder/FormWrapperV2";
import { FormProps } from "@/types/form";
import { pageFormData } from "./PageFormData";
import { useAppSelector } from "@/store/hook";

const PageForm = (props: FormProps) => {
  const { title, onSubmit, defaultValues } = props;

  const componentData = useAppSelector(
    (state) => state.component.componentData,
  );

  return (
    <>
      <Typography variant="h6"> {title} </Typography>
      <FormWrapperV2
        formRendererProps={{
          formData: pageFormData.formData,
        }}
        storeValueAs="components"
        onSubmit={onSubmit}
        defaultValues={defaultValues}
      />
    </>
  );
};
export default PageForm;
