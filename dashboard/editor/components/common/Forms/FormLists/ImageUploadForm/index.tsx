"use client";
import { Typography } from "@mui/material";
import FormWrapperV2 from "../../FormBuilder/FormWrapperV2";
import { imageUploadFormData } from "./ImageUploadData";
import { useSnackbar } from "notistack";
import { notiStack } from "@/store/action/notistackAction";
import { uploadFile } from "@/database/fileUpload/action";

interface ISignInFormProps {
  title: string;
}

const ImageUploadForm = (props: ISignInFormProps) => {
  const { title } = props;
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = (data) => {
    let notiStackData: notiStack = {
      message: "Failed to upload files, please try again",
      variant: "error",
    };
    uploadFile(data?.files, `Organisation Logo/${data?.files[0]?.name}`).then((downloadURL) => {
        notiStackData.message = 'File uploaded successfully';
        notiStackData.variant = "success";
    }).catch((e) => {
        notiStackData.message = 'File uploaded successfully';
        notiStackData.variant = "success";
        
    }).finally(() => {
        enqueueSnackbar(notiStackData);
    })
  };

  return (
    <>
      <Typography variant="h6"> {title} </Typography>
      <FormWrapperV2
        formRendererProps={{
          formData: imageUploadFormData.formData,
        }}
        storeValueAs= 'buttons'
        onSubmit={onSubmit}
      />
    </>
  );
};
export default ImageUploadForm;
