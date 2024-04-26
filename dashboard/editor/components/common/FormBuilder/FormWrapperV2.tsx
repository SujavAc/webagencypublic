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
  formFieldDirection?: "column" | "row" | "row-reverse" | "column-reverse";
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
            startIcon="AdsClick"
            disabled={Object.keys(formState.errors).length >= 1}
          >
            Submit
          </ButtonComponent>,
          <ButtonComponent
            key="clearbutton"
            variant="outlined"
            startIcon="Clear"
            onClick={() => reset()}
          >
            Clear
          </ButtonComponent>,
        ]}
        stackProps={{
          direction: formFieldDirection ? formFieldDirection : "column",
          justifyContent: "stretch",
          alignItems: formFieldDirection === "row" ? "flex-start" : "stretch",
          alignContent: "flex-start",
          flexWrap: formFieldDirection === "row" ? "wrap" : "nowrap",
          sx: { padding: "24px 0px", gap: 2 },
        }}
      />
    </form>
  );
};
export default FormWrapperV2;
