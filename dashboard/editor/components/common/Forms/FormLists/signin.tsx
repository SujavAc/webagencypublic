"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSnackbar } from "notistack";
import InputField from "../Input";
import { Typography, useTheme } from "@mui/material";
import { useUserAuth } from "@/database/authentication/authContext";
import { useRouter } from "next/navigation";
import StackLayout from "../../Layout/Stack";
import ButtonComponent from "../../Inputs/Button";
import { useState } from "react";
import ResetPasswordForm from "./restPassword";

interface IFormInput {
  userName: string;
  password: string;
}

interface ISignInFormProps {
  title: string;
}

const SiginInForm = (props: ISignInFormProps) => {
  const [resetForm, setResetForm] = useState(false);
  const router = useRouter();
  const { title } = props;
  const { enqueueSnackbar } = useSnackbar();
  const { logIn } = useUserAuth();
  const theme = useTheme();

  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const { userName, password } = data;
    if (userName && password) {
      logIn(userName, password)
        .then((data: any) => {
          enqueueSnackbar({
            message: "Thank you for sign in with us",
            variant: "success",
          });
          router.push("/dashboard");
        })
        .catch((error: any) => {
          enqueueSnackbar({
            message: "Please try again, Thank you.",
            variant: "error",
          });
        });
    }
  };

  return (
    <>
      {resetForm ? (
        <ResetPasswordForm
          title="Reset password here"
          setResetForm={setResetForm}
        />
      ) : (
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
              <InputField
                control={control}
                name="password"
                rules={{
                  required: true,
                  maxLength: 10,
                  minLength: 5,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                }}
                fieldProps={{
                  label: "Password",
                  type: "password",
                  variant: "outlined",
                }}
                helperText="Please enter 5 to 10 character password including uppercase, lowercase, number and special characters"
                key="password"
              />,
              <ButtonComponent
                key="button"
                variant="contained"
                type="submit"
                startIcon="Login"
                disabled={Object.keys(formState.errors).length >= 1}
              >
                Sign In
              </ButtonComponent>,
              <ButtonComponent
                key="resetbutton"
                variant="outlined"
                startIcon="ArrowForward"
                onClick={() => setResetForm(true)}
              >
                Reset
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
              },
            }}
          />
        </form>
      )}
    </>
  );
};
export default SiginInForm;
