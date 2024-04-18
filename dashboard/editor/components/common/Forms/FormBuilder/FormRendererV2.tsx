import { useMemo, forwardRef } from "react";
import FormMap from "../FormMap";
import { FormRenderProps } from "@/types/formRender";
import FormControl from "./FormControl";
import StackLayout from "../../Layout/Stack";

const FormRenderV2 = (props: FormRenderProps) => {
  const { formData, index, control, storeValueAs } = props;
  const { register } = FormControl({});

  const MapFormFields = (props) => {
    const Field = FormMap[props.type];
    return <Field {...props} />;
  };

  const FormFieldMap = useMemo(() => {
    return (
      formData &&
      formData.map((form) => (
        <MapFormFields
          control={control}
          {...form}
          key={form?.name}
          {...register(`${storeValueAs}.${index}.${form?.name}`)}
        />
      ))
    );
  }, [control, formData, register, index, storeValueAs]);

  return (
    <StackLayout
      noOfItems={FormFieldMap}
      stackProps={{
        direction: "column",
        justifyContent: "stretch",
        spacing: 3,
        sx: { paddingTop: "24px" },
      }}
    />
  );
};

export default FormRenderV2;
