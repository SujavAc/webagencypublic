"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSnackbar } from "notistack";
import InputField from "../Input";
import { Typography, useTheme } from "@mui/material";
import { useUserAuth } from "@/database/authentication/authContext";
import { useRouter } from "next/navigation";
import StackLayout from "../../Layout/Stack";
import ButtonComponent from "../../Inputs/Button";

interface IResetFormInput {
  userName: string;
}

interface IResetFormProps {
  title: string;
  setResetForm?: (boolean) => void;
}

const ResetPasswordForm = (props: IResetFormProps) => {
  const { title, setResetForm } = props;
  const { enqueueSnackbar } = useSnackbar();
  const { resetPassword } = useUserAuth();
  const theme = useTheme();

  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      userName: "",
    },
  });

  const onSubmit: SubmitHandler<IResetFormInput> = (data) => {
    const { userName } = data;
    if (userName) {
      resetPassword(userName)
        .then((data: any) => {
          enqueueSnackbar({
            message: "Please check your email for reset instruction",
            variant: "success",
          });
          setResetForm(false);
        })
        .catch((error: any) => {
          enqueueSnackbar({
            message: "Please try again, Thank you.",
            variant: "error",
          });
          setResetForm(true);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StackLayout
        noOfItems={[
          title && (
            <Typography variant="h6" key="title">
              {title}
            </Typography>
          ),
          <InputField
            control={control}
            name="userName"
            rules={{
              required: true,
              maxLength: 40,
              minLength: 5,
              regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            }}
            fieldProps={{
              label: "User Name",
              type: "email",
              variant: "outlined",
            }}
            helperText="Please enter a valid email address"
            key="userName"
          />,
          <ButtonComponent
            key="resetbutton"
            variant="contained"
            startIcon="LockReset"
            type="submit"
            disabled={Object.keys(formState.errors).length >= 1}
          >
            Reset
          </ButtonComponent>,
          <ButtonComponent
            key="closeresetbutton"
            variant="outlined"
            startIcon="ArrowBack"
            onClick={() => setResetForm(false)}
          >
            Back to sign in
          </ButtonComponent>,
        ]}
        stackProps={{
          direction: "column",
          useFlexGap: true,
          flexWrap: "wrap",
          alignItems: "stretch",
          justifyContent: "center",
          spacing: 3,
          sx: {
            padding: "24px",
            bgcolor: "background.paper",
            borderRadius: theme.shape.borderRadius,
            width: "100%",
          },
        }}
      />
    </form>
  );
};
export default ResetPasswordForm;
