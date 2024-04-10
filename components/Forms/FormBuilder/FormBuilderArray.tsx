import React from "react";
import { useForm, useFieldArray, Control, useWatch } from "react-hook-form";
import InputField from "../Input";
import RadioField from "../Radio";
import ButtonComponent from "@/components/Common/Button";
import StackLayout from "@/components/Layout/Stack";
import SwitchField from "../Switch";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionComponent from "@/components/Common/Accordion";
import SelectField from "../Select";

interface IFormBuilderProps {
  getFormData: (data) => void;
}

export default function FormBuilderArray(props: IFormBuilderProps) {
  const { getFormData } = props;
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const {
    fields: fieldsArray,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "fields",
  });

  const onSubmit = (data) => {
    getFormData(data.fields);
  };

  const appendContact = (addressIndex) => {
    setValue(`fields[${addressIndex}].fieldProps.options`, [
      ...(fieldsArray[addressIndex].fieldProps.options || []),
      { label: "", value: "" },
    ]);
  };

  const removeContact = (addressIndex, optionIndex) => {
    setValue(
      `fields[${addressIndex}].fieldProps.options`,
      fieldsArray[addressIndex].fieldProps.options.filter(
        (_, index) => index !== optionIndex,
      ),
    );
  };

  const ConditionField = ({
    control,
    index,
    register,
  }: {
    control: Control;
    index: number;
  }) => {
    const output = useWatch({
      name: "fields",
      control,
      defaultValue: "yay! I am watching you :)",
    });

    return (
      <>
        {output[index]?.enableValidation ? (
          <>
            <SwitchField
              control={control}
              name="required"
              rules={{ required: false }}
              fieldProps={{
                label: "Require validation",
              }}
              helperText="leave it if the input is not mandatory"
              key="required"
              {...register(`fields.${index}.rules.required`)}
            />
            <InputField
              control={control}
              name="max"
              rules={{
                required: false,
                pattern: /^[0-9]*$/,
              }}
              fieldProps={{
                label: "Max",
                variant: "outlined",
                type: "number",
              }}
              helperText="This is required"
              key="max"
              {...register(`fields.${index}.rules.max`)}
            />
            <InputField
              control={control}
              name="min"
              rules={{
                required: false,
                pattern: /^[0-9]*$/,
              }}
              fieldProps={{
                label: "Min",
                variant: "outlined",
                type: "number",
              }}
              helperText="This is required"
              key="min"
              {...register(`fields.${index}.rules.min`)}
            />
            <InputField
              control={control}
              name="Max Length"
              rules={{
                required: false,
                pattern: /^[0-9]*$/,
              }}
              fieldProps={{
                label: "Max Length",
                variant: "outlined",
                type: "number",
              }}
              helperText="This is required"
              key="maxLength"
              {...register(`fields.${index}.rules.maxLength`)}
            />
            <InputField
              control={control}
              name="pattern"
              rules={{
                required: false,
                //   pattern:
                //     /^((?:(?:[^?+*{}()[\]\\|]+|\\.|\[(?:\^?\\.|\^[^\\]|[^\\^])(?:[^\]\\]+|\\.)*\]|\((?:\?[:=!]|\?<[=!]|\?>)?(?1)??\)|\(\?(?:R|[+-]?\d+)\))(?:(?:[?+*]|\{\d+(?:,\d*)?\})[?+]?)?|\|)*)$/,
              }}
              fieldProps={{
                label: "Pattern",
                variant: "outlined",
              }}
              helperText="This is required"
              key="pattern"
              {...register(`fields.${index}.rules.pattern`)}
            />
          </>
        ) : null}
      </>
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fieldsArray.map((field, index) => (
        <AccordionComponent
          key={field.id}
          heading={`Field ${index + 1}`}
          headingIcon={<ExpandMoreIcon />}
          content=<div key={field.id}>
            <StackLayout
              noOfItems={[
                <InputField
                  control={control}
                  name={field.name}
                  rules={{
                    required: true,
                  }}
                  fieldProps={{
                    label: "Field Name",
                    variant: "outlined",
                  }}
                  helperText="This is required"
                  key={field.name + field.id}
                  {...register(`fields.${index}.name`)}
                />,
                <InputField
                  control={control}
                  name={field.helperText}
                  rules={{
                    required: true,
                  }}
                  fieldProps={{
                    label: "Helper Text",
                    variant: "outlined",
                    multiline: true,
                    rows: 2,
                  }}
                  helperText="This is required"
                  key={field.helperText + field.id}
                  {...register(`fields.${index}.helperText`)}
                />,
                <SelectField
                  control={control}
                  name={field.type}
                  rules={{ required: true }}
                  fieldProps={{
                    label: "Choose Input Type",
                    options: [
                      { value: "input", label: "Input Field" },
                      { value: "checkbox", label: "CheckBox Field" },
                      { value: "checkboxgroup", label: "Check Box Group" },
                      { value: "fileupload", label: "File Upload field" },
                      { value: "radio", label: "Radio field" },
                      { value: "rating", label: "Rating field" },
                      { value: "rte", label: "Rich Text Editor field" },
                      { value: "select", label: "Select field" },
                      { value: "slider", label: "Slider field" },
                      { value: "switch", label: "Switch field" },
                      { value: "togglebutton", label: "Toggle Button field" },
                    ],
                  }}
                  helperText="This is required Field"
                  key={field.type + field.id}
                  {...register(`fields.${index}.type`)}
                />,
                <SwitchField
                  control={control}
                  name={field.enableValidation}
                  rules={{ required: false }}
                  fieldProps={{
                    label: "Enable validation",
                  }}
                  helperText="Do you require validation?"
                  key={field.required + field.id}
                  {...register(`fields.${index}.enableValidation`)}
                />,
                <ConditionField
                  control={control}
                  index={index}
                  register={register}
                  key="condition"
                />,
                <InputField
                  control={control}
                  name={field.fieldProps.label}
                  rules={{
                    required: true,
                  }}
                  fieldProps={{
                    label: "Label",
                    variant: "outlined",
                  }}
                  helperText="This is required"
                  key={field.fieldProps.label + field.id}
                  {...register(`fields.${index}.fieldProps.label`)}
                />,
                <RadioField
                  control={control}
                  name={field.fieldProps.variant}
                  rules={{ required: false }}
                  fieldProps={{
                    label: "Field Variant",
                    options: [
                      { value: "filled", label: "Filled" },
                      { value: "outlined", label: "Outlined" },
                      { value: "standard", label: "Standard" },
                    ],
                    errorMessage: "Field is required",
                  }}
                  key={field.fieldProps.variant + field.id}
                  {...register(`fields.${index}.fieldProps.variant`)}
                />,
                <SwitchField
                  control={control}
                  name={field.fieldProps.multiline}
                  rules={{ required: false }}
                  fieldProps={{
                    label: "Multiline",
                  }}
                  helperText="Input field only"
                  key={field.fieldProps.multiline + field.id}
                  {...register(`fields.${index}.fieldProps.multiline`)}
                />,
                <InputField
                  control={control}
                  name={field.fieldProps.rows}
                  rules={{
                    required: false,
                  }}
                  fieldProps={{
                    label: "Number of rows",
                    variant: "outlined",
                    type: "number",
                  }}
                  key={field.fieldProps.rows + field.id}
                  helperText="This is required"
                  {...register(`fields.${index}.fieldProps.rows`)}
                />,
                <div key="optional">
                  {field.fieldProps.options.map((option, optionIndex) => (
                    <div key={option.id}>
                      <h3>Option {optionIndex + 1}</h3>
                      <InputField
                        control={control}
                        name="label"
                        rules={{
                          required: false,
                        }}
                        fieldProps={{
                          label: "Label",
                          variant: "outlined",
                        }}
                        key={`label-${optionIndex}`}
                        helperText=""
                        {...register(
                          `fields.${index}.fieldProps.options.${optionIndex}.label`,
                        )}
                      />
                      <InputField
                        control={control}
                        name="value"
                        rules={{
                          required: false,
                        }}
                        fieldProps={{
                          label: "Value",
                          variant: "outlined",
                        }}
                        key={`value-${optionIndex}`}
                        helperText=""
                        {...register(
                          `fields.${index}.fieldProps.options.${optionIndex}.value`,
                        )}
                      />

                      <ButtonComponent
                        key="button"
                        variant="outlined"
                        onClick={() => removeContact(index, optionIndex)}
                      >
                        Remove option
                      </ButtonComponent>
                    </div>
                  ))}
                  <ButtonComponent
                    key="button"
                    variant="outlined"
                    onClick={() => appendContact(index)}
                  >
                    Add Options
                  </ButtonComponent>
                </div>,
                <ButtonComponent
                  key="button"
                  variant="outlined"
                  onClick={() => remove(index)}
                >
                  Remove Field
                </ButtonComponent>,
              ]}
              stackProps={{
                spacing: 4,
              }}
            />
          </div>
          action={[
            {
              buttonLabel: "Add",
              onClick: () => console.log("test"),
            },
          ]}
        />
      ))}
      <ButtonComponent
        variant="outlined"
        onClick={() =>
          append({
            name: "title",
            helperText: "This is required",
            type: "input",
            rules: {
              required: true,
            },
            fieldProps: {
              label: "Menu title",
              variant: "outlined",
            },
          })
        }
      >
        Add Field
      </ButtonComponent>
      <ButtonComponent variant="outlined" type="submit">
        Submit
      </ButtonComponent>
    </form>
  );
}
