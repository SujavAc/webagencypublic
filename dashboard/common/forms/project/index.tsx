"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { notiStack } from "@/store/action/notistackAction";
import { useSnackbar } from "notistack";
import StackLayout from "@/components/Layout/Stack";
import InputField from "@/components/Forms/Input";
import ButtonComponent from "@/components/Common/Button";
import FileUploadField from "@/components/Forms/FileUpload";
import RTEEditor from "@/components/Forms/RTE";
import { Typography } from "@mui/material";

interface IProjectForm {
  title: string;
}
interface IProjectFormSubmit {
  projectName: string;
  projectDescription: string;
  projectDuration: string;
  projectFeature: string;
  projectImageUrl: string;
}

const ProjectForm = (props: IProjectForm) => {
  const { title } = props;
  const { enqueueSnackbar } = useSnackbar();
  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      projectName: "",
      projectDescription: "",
      projectDuration: "",
      projectFeature: "",
      projectImageUrl: "",
    },
  });

  const onSubmit: SubmitHandler<IProjectFormSubmit> = (data) => {
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
          title && (
            <Typography variant="h6" key="title">
              {title}
            </Typography>
          ),
          <InputField
            control={control}
            name="projectName"
            rules={{
              required: true,
            }}
            fieldProps={{
              label: "Project Name",
              variant: "outlined",
            }}
            helperText="Please enter your project name"
            key="projectName"
          />,
          <RTEEditor
            control={control}
            name="projectDescription"
            rules={{
              required: true,
            }}
            label="Project Description"
            helperText="Please enter your project description in details"
            key="projectDescription"
          />,
          <InputField
            control={control}
            name="projectDuration"
            rules={{
              required: true,
            }}
            fieldProps={{
              label: "Project duration",
              variant: "outlined",
            }}
            helperText="Please enter your project duration"
            key="projectDuration"
          />,
          <RTEEditor
            control={control}
            name="projectFeature"
            rules={{
              required: true,
            }}
            label="Project features"
            helperText="Please enter your project feature in details"
            key="projectFeature"
          />,
          <FileUploadField
            control={control}
            name="projectImageUrl"
            rules={{ required: true }}
            fieldProps={{
              label: "Upload your logo image",
              variant: "contained",
            }}
            helperText="This is required Field"
            multiple={false}
            displayImages={true}
            key="projectImageUrl"
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
export default ProjectForm;
