"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { notiStack } from "@/store/action/notistackAction";
import { useSnackbar } from "notistack";
import StackLayout from "@/components/Layout/Stack";
import InputField from "@/components/Forms/Input";
import ButtonComponent from "@/components/Common/Button";
import FileUploadField from "@/components/Forms/FileUpload";
import { Typography } from "@mui/material";
import RTEEditor from "@/components/Forms/RTE";

interface IEditBlogFormField {
  blogTitle: string;
  description: string;
  image: string;
  tag: string;
}

interface IEditBlogForm {
  title: string;
  defaultValues?: IEditBlogFormField;
}

const BlogForm = (props: IEditBlogForm) => {
  const { enqueueSnackbar } = useSnackbar();
  const { title, defaultValues } = props;
  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      blogTitle: "",
      description: "",
      image: "",
      tag: "",
      ...defaultValues,
    },
  });

  const onSubmit: SubmitHandler<IEditBlogFormField> = (data) => {
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
            name="blogTitle"
            rules={{
              required: true,
            }}
            fieldProps={{
              label: "Blog title",
            }}
            helperText="Please enter your blog title"
            key="blogTitle"
          />,
          <RTEEditor
            control={control}
            name="description"
            rules={{
              required: true,
            }}
            label="Blog Description"
            helperText="Please enter your blog description"
            key="blogDescription"
          />,
          <InputField
            control={control}
            name="tag"
            rules={{
              required: true,
            }}
            fieldProps={{
              label: "Blog tag",
              variant: "outlined",
            }}
            helperText="Please enter your organisation tag"
            key="tag"
          />,
          <FileUploadField
            control={control}
            name="image"
            rules={{ required: true }}
            fieldProps={{
              variant: "contained",
              label: "Upload your image",
            }}
            helperText="This is required Field"
            multiple={false}
            displayImages={true}
            key="image"
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
export default BlogForm;
