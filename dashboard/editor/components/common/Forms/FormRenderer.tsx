"use client";
import { notiStack } from "@/store/action/notistackAction";
import { useSnackbar } from "notistack";
import FormMap from "./FormMap";
import { useMemo } from "react";
import { FormRenderProps } from "@/types/formRender";
import StackLayout from "../Layout/Stack";

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
    if (!props && !props?.type) {
      return [];
    }
    const Field = FormMap[props?.type || "input"];
    return <Field {...props} />;
  };

  const FormFieldMap = useMemo(() => {
    return (
      formData &&
      formData?.map((form, index) =>
        form && form?.type ? (
          <MapFormFields control={control} {...form} key={form?.name + index} />
        ) : (
          []
        ),
      )
    );
  }, [formData, control]);

  return (
    <StackLayout
      noOfItems={FormFieldMap?.length > 0 ? [...FormFieldMap] : FormFieldMap}
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
