"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { notiStack } from "@/store/action/notistackAction";
import { useSnackbar } from "notistack";
import StackLayout from "@/components/Layout/Stack";
import InputField from "@/components/Forms/Input";
import ButtonComponent from "@/components/Common/Button";
import FileUploadField from "@/components/Forms/FileUpload";

interface IEditProfileForm {
  logoUrl: string;
  name: string;
  address: string;
  location: string;
  phone: string;
  email: string;
  allRightReserveText: string;
}

const EditProfileForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      logoUrl: "",
      name: "",
      address: "",
      location: "",
      phone: "",
      email: "",
      allRightReserveText: "",
    },
  });

  const onSubmit: SubmitHandler<IEditProfileForm> = (data) => {
    const resData: notiStack = {
      message: "Sorry to see you go...",
      variant: "error",
    };
    enqueueSnackbar(resData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StackLayout
        noOfItems={[
          <InputField
            control={control}
            name="name"
            rules={{
              required: true,
            }}
            fieldProps={{
              label: "Organisation name",
              variant: "outlined",
            }}
            helperText="Please enter your organisation name"
            key="name"
          />,
          <InputField
            control={control}
            name="location"
            rules={{
              required: true,
            }}
            fieldProps={{
              label: "Organisation Location",
              variant: "outlined",
            }}
            helperText="Please enter your organisation location"
            key="location"
          />,
          <InputField
            control={control}
            name="address"
            rules={{
              required: true,
            }}
            fieldProps={{
              label: "Organisation Address",
              variant: "outlined",
            }}
            helperText="Please enter your organisation address"
            key="address"
          />,
          <InputField
            control={control}
            name="phone"
            rules={{
              required: true,
            }}
            fieldProps={{
              label: "Organisation Phone Number",
              variant: "outlined",
            }}
            helperText="Please enter your organisation contact number"
            key="phone"
          />,
          <InputField
            control={control}
            name="email"
            rules={{
              required: true,
            }}
            fieldProps={{
              label: "Organisation email address",
              variant: "outlined",
              type: "email",
            }}
            helperText="Please enter your organisation email address"
            key="email"
          />,
          <InputField
            control={control}
            name="allRightReserveText"
            rules={{
              required: true,
            }}
            fieldProps={{
              label: "All Right Reserve Text",
              variant: "outlined",
              multiline: true,
              rows: 4,
            }}
            helperText="Organisation right and reserve text"
            key="allRightReserveText"
          />,
          <FileUploadField
            control={control}
            name="files"
            rules={{ required: true }}
            fieldProps={{
              label: "Upload your logo image",
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
          direction: "column",
          useFlexGap: true,
          flexWrap: "nowrap",
          alignItems: "stretch",
          justifyContent: "center",
          spacing: 3,
          sx: { padding: "24px", minWidth: "300px" },
        }}
      />
    </form>
  );
};
export default EditProfileForm;
