"use client";
import { ReactElement } from "react";
import FormControl from "./FormControl";
import FormBuilderV2 from "./FormBuilderV2";
import { FormRenderProps } from "@/types/formRender";
import { IFormBUilderProps } from "@/types/formBuilder";
import FormRender from "../Forms/FormRenderer";
import StackLayout from "../Layout/Stack";
import ButtonComponent from "../Inputs/Button";

interface IFormWrapperProps {
  children?: ReactElement;
  formRendererProps?: FormRenderProps;
  formBuilderProps?: IFormBUilderProps;
  storeValueAs?: string;
  onSubmit?: (data: any) => Promise<{ error: boolean; success: boolean }>;
  defaultValues?: any;
  formFieldDirection?: string;
}

const FormWrapperV2 = (props: IFormWrapperProps) => {
  const {
    formRendererProps,
    formBuilderProps,
    storeValueAs,
    onSubmit,
    defaultValues,
    formFieldDirection,
  } = props;
  const { handleSubmit, formState, control, watch, reset } = FormControl(
    defaultValues || {}
  );

  const formSubmitHandler = async (data) => {
    if (onSubmit) {
      const { error } = await onSubmit(data);
      if (!error) {
        return reset();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(formSubmitHandler)}>
      <StackLayout
        noOfItems={[
          formRendererProps && (
            <FormRender
              {...formRendererProps}
              control={control}
              key="formRenderer"
            />
          ),
          formBuilderProps && (
            <FormBuilderV2
              {...formBuilderProps}
              control={control}
              storeValueAs={storeValueAs}
              key="builder"
              defaultValue={defaultValues || {}}
            />
          ),
          <ButtonComponent
            key="button"
            variant="outlined"
            type="submit"
            disabled={Object.keys(formState.errors).length >= 1}
          >
            Submit
          </ButtonComponent>,
        ]}
        stackProps={{
          direction: formFieldDirection || "column",
          justifyContent: "stretch",
          alignItems: formFieldDirection ? "flex-start" : "stretch",
          alignContent: "flex-start",
          spacing: 2,
          sx: { padding: "24px 0px" },
        }}
      />
    </form>
  );
};
export default FormWrapperV2;
