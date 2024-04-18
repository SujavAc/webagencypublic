import * as React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import FormRenderV2 from "./FormRendererV2";
import { FormRenderProps } from "@/types/formRender";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ButtonComponent from "../Inputs/Button";
import AccordionComponent from "../Accordion";

interface IFormBUilderProps {
  fieldNames?: IIFormBUilderFieldName;
  formJsonData?: FormRenderProps;
  control: any;
  storeValueAs?: string;
  defaultValue?: any;
}

interface IIFormBUilderFieldName {
  name?: string;
}

export default function FormBuilderV2(props: IFormBUilderProps) {
  const { fieldNames, formJsonData, control, storeValueAs, defaultValue } =
    props;

  const { fields, append, update, remove } = useFieldArray({
    control,
    name: "array",
  });

  return (
    <>
      {/* // <form onSubmit={handleSubmit((data) => console.log(data))}> */}
      {fields.map((field, index) => (
        <AccordionComponent
          key={field.id}
          heading={`${storeValueAs} ${index + 1}`}
          headingIcon={<ExpandMoreIcon />}
          content=<Edit
            key={field.id}
            control={control}
            remove={remove}
            index={index}
            value={field}
            formElements={formJsonData?.formData}
            storeValueAs={storeValueAs}
            defaultValue={defaultValue}
          />
          action={[
            {
              buttonLabel: `Remove ${storeValueAs}`,
              onClick: () => remove(index),
            },
          ]}
        />
      ))}

      {formJsonData?.formData && formJsonData?.formData?.length > 0 && (
        <ButtonComponent
          key="button"
          variant="contained"
          onClick={() => append(fieldNames)}
        >
          Add {storeValueAs}
        </ButtonComponent>
      )}
    </>
  );
}

// const Display = ({ control, index }) => {
//   const data = useWatch({
//     control,
//     name: `array.${index}`,
//   });
//   return <p>{data?.name}</p>;
// };

const Edit = ({
  remove,
  index,
  value,
  control,
  formElements,
  storeValueAs,
  defaultValue,
}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: defaultValue,
  });

  return (
    <div>
      {/* <Display control={control} index={index} /> */}
      <FormRenderV2
        formData={formElements}
        control={control}
        index={index}
        storeValueAs={storeValueAs}
      />
      {/* <ButtonComponent
        key="button"
        variant="outlined"
        onClick={() => remove(index)}
      >
        Remove Field
      </ButtonComponent> */}
    </div>
  );
};
