"use client";
import StackLayout from "../Layout/Stack";
import { notiStack } from "@/store/action/notistackAction";
import { useSnackbar } from "notistack";
import FormMap from "./FormMap";
import { useMemo } from "react";
import { FormRenderProps } from "@/types/formRender";

const FormRender = (props: FormRenderProps) => {
  const { formData, control } = props;
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = (data) => {
    const resData: notiStack = {
      message: "Sorry to see you go...",
      variant: "error",
    };
    enqueueSnackbar(resData);
  };

  const MapFormFields = (props) => {
    const Field = FormMap[props.type];
    return <Field {...props} />;
  };

  const FormFieldMap = useMemo(() => {
    return (
      formData &&
      formData?.map((form, index) => (
        <MapFormFields control={control} {...form} key={form.name + index} />
      ))
    );
  }, [formData, control]);

  return (
    <StackLayout
      noOfItems={[...FormFieldMap]}
      stackProps={{
        direction: "column",
        justifyContent: "stretch",
        spacing: 3,
        // sx: { padding: "24px 0px" },
      }}
    />
  );
};
export default FormRender;
