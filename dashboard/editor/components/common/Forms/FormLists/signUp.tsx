"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { notiStack } from "@/store/action/notistackAction";
import { useSnackbar, closeSnackbar } from "notistack";
import InputField from "../Input";
import { Typography } from "@mui/material";
import { UserType, useUserAuth } from "@/database/authentication/authContext";
import { addUser } from "@/database/user/action";
import StackLayout from "../../Layout/Stack";
import ButtonComponent from "../../Inputs/Button";

interface IFormInput {
  fullName: string;
  userName: string;
  password: string;
  confirmPassword: string;
}

interface ISignInFormProps {
  title: string;
}

const SiginUpForm = (props: ISignInFormProps) => {
  const { title } = props;
  const { enqueueSnackbar } = useSnackbar();
  const { signUp } = useUserAuth();

  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      fullName: "",
      userName: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const { fullName, userName, password, confirmPassword } = data;
    const isPasswordMatch =
      password && confirmPassword && password === confirmPassword;
    if (fullName && userName && isPasswordMatch) {
      signUp(userName, password)
        .then((res: any) => {
          addUser({ ...data, userRole: UserType.ADMIN, uid: res?.user?.uid })
            .then(() => {})
            .catch((e) => {
              enqueueSnackbar({
                message: "Please try again, Thank you.",
                variant: "error",
              });
            })
            .finally(() => {
              enqueueSnackbar({
                message: "Thank you for signing up with us",
                variant: "success",
              });
            });
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
            name="fullName"
            rules={{
              required: true,
            }}
            fieldProps={{
              label: "Full Name",
              type: "text",
              variant: "outlined",
            }}
            helperText="Please enter your full name"
            key="fullName"
          />,
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
          <InputField
            control={control}
            name="confirmPassword"
            rules={{
              required: true,
              maxLength: 10,
              minLength: 5,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            }}
            fieldProps={{
              label: "Confirm Password",
              type: "password",
              variant: "outlined",
            }}
            helperText="Please enter 5 to 10 character password including uppercase, lowercase, number and special characters"
            key="confirmPassword"
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
          flexWrap: "wrap",
          alignItems: "stretch",
          justifyContent: "center",
          spacing: 3,
          sx: { padding: "24px", bgcolor: "background.paper" },
        }}
      />
    </form>
  );
};
export default SiginUpForm;
