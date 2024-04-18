"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import RadioField from "./Radio";
import CheckboxGroup from "./Checkbox/CheckboxGroup";
import RatingField from "./Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SelectField from "./Select";
import SliderField from "./Slider";
import SwitchField from "./Switch";
import ToggleButtonField from "./ToggleButton";
import FileUploadField from "./FileUpload";
import StackLayout from "../Layout/Stack";
import { notiStack } from "@/store/action/notistackAction";
import { useSnackbar } from "notistack";
import FormMap from "./FormMap";
import ButtonComponent from "../Inputs/Button";

interface IFormInput {
  firstName: string;
  checkboxGroup: any[];
}

const InputForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      firstName: "",
      checkboxGroup: [],
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
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

  const FormFieldMap = () => {
    const FormData = [
      {
        name: "firstName",
        helperText: "This is required",
        type: "input",
        rules: {
          required: true,
          maxLength: 10,
          max: null,
          min: 1,
          pattern: /[A-Za-z]{3}/,
        },
        fieldProps: {
          label: "First Name",
          variant: "outlined",
          multiline: true,
          rows: 4,
          options: [{ label: null, value: null }],
        },
      },
    ];
    return (
      FormData &&
      MapFormFields &&
      FormData.map((form, index) => (
        <MapFormFields control={control} {...form} key={form.name + index} />
      ))
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StackLayout
        noOfItems={[
          ...[FormFieldMap],
          <CheckboxGroup
            control={control}
            label="Pick 2-3"
            name="checkboxGroup"
            rules={{
              required: false,
            }}
            fieldProps={{
              row: true,
              disabled: false,
              className: "checkbox",
              options: [
                { value: "female", label: "Female" },
                { value: "male", label: "Male" },
                { value: "other", label: "Other" },
              ],
            }}
            helperText="Field is required"
            key="checkbox"
          />,
          <RadioField
            control={control}
            name="radioButton"
            rules={{ required: false }}
            fieldProps={{
              label: "Radio Button",
              options: [
                { value: "female", label: "Female" },
                { value: "male", label: "Male" },
                { value: "other", label: "Other" },
              ],
            }}
            helperText="Field is required"
            key="radioButton"
          />,
          <RatingField
            name="rating"
            control={control}
            rules={{ required: true }}
            fieldProps={{
              defaultValue: 2,
              precision: 0.5,
              icon: <FavoriteIcon fontSize="inherit" />,
              emptyIcon: <FavoriteBorderIcon fontSize="inherit" />,
            }}
            helperText="This is required Field"
            key="rating"
          />,
          <SelectField
            control={control}
            name="select"
            rules={{ required: false }}
            fieldProps={{
              label: "Select Names",
              options: [
                { value: "sujav", label: "Sujav" },
                { value: "aastha", label: "Aastha" },
                { value: "santosh", label: "Santosh" },
              ],
              multiple: true,
            }}
            helperText="This is required Field"
            key="select"
          />,
          <SliderField
            name="slider"
            control={control}
            rules={{ required: false }}
            fieldProps={{
              valueLabelDisplay: "on",
              color: "secondary",
              defaultValue: 20,
              sx: { minWidth: "200px" },
              marks: [
                {
                  value: 0,
                  label: "0°C",
                },
                {
                  value: 20,
                  label: "20°C",
                },
                {
                  value: 37,
                  label: "37°C",
                },
                {
                  value: 100,
                  label: "100°C",
                },
              ],
              getAriaValueText: (value: any) => `${value}°C`,
              orientation: "horizontal",
            }}
            helperText="This is slider"
            key="slider"
          />,
          <SwitchField
            name="switch"
            control={control}
            rules={{ required: false }}
            fieldProps={{
              label: "Please use the switch",
              labelPlacement: "top",
            }}
            options={[
              { value: "sujav", label: "Sujav" },
              { value: "aastha", label: "Aastha" },
              { value: "santosh", label: "Santosh" },
            ]}
            helperText="This is required"
            key="switch"
          />,
          <ToggleButtonField
            control={control}
            name="toggleButton"
            rules={{ required: false }}
            fieldProps={{
              label: "Toggle Button",
              orientation: "vertical",
              options: [
                { value: "sujav", label: "Sujav" },
                { value: "aastha", label: "Aastha" },
                { value: "santosh", label: "Santosh" },
              ],
            }}
            helperText="This is required Field"
            key="toggleButton"
          />,
          <FileUploadField
            control={control}
            name="files"
            rules={{ required: false }}
            fieldProps={{
              label: "Upload files",
              variant: "contained",
            }}
            helperText="This is required Field"
            multiple={false}
            displayImages={true}
            key="files"
          />,
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
          direction: "row",
          useFlexGap: true,
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          spacing: 3,
          sx: { paddingTop: "24px" },
        }}
      />
    </form>
  );
};
export default InputForm;
