"use client";
import { Box, Button, FormControl, FormHelperText } from "@mui/material";
import { Controller, useController } from "react-hook-form";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hook";
import UploadedImageGallery from "./uploadedImageViewer";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const FileUploadField = ({ control, name, rules, fieldProps, ...rest }) => {
  const { label, variant, ...inputFieldProp } = fieldProps;
  const [uploadFiles, setUploadFiles] = useState([]);
  const { field } = useController({ name, control });
  const { value, onChange } = field;
  const { storageFileUrls } = useAppSelector((state) => state.storageData);

  const UpdateFiles = (data: any[]) => {
    return setUploadFiles(data);
  };

  const handleDelete = (index) => {
    const updatedFiles = [...uploadFiles];
    updatedFiles.splice(index, 1);
    setUploadFiles(updatedFiles);
    onChange(updatedFiles);
  };

  useEffect(() => {
    setUploadFiles(value);
  }, [value]);

  // useEffect(() => {
  //   if (storageFileUrls) {
  //     const keys = Object.keys(storageFileUrls);
  //     const newvalue = [...uploadFiles]?.filter(
  //       (file) => !keys.includes(file?.name),
  //     );
  //     console.log(newvalue);
  //     // onChange(newvalue);
  //   }
  // }, [storageFileUrls, uploadFiles]);

  // const fileTypes = [
  //   "image/apng",
  //   "image/bmp",
  //   "image/gif",
  //   "image/jpeg",
  //   "image/pjpeg",
  //   "image/png",
  //   "image/svg+xml",
  //   "image/tiff",
  //   "image/webp",
  //   "image/x-icon",
  // ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange }, fieldState: { error } }) => (
          <FormControl error={!!error}>
            <Button
              component="label"
              role={undefined}
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              variant={variant}
            >
              {label}
              <VisuallyHiddenInput
                type="file"
                onChange={(e) => {
                  onChange(e.target[name]);
                }}
                color="secondary"
                {...inputFieldProp}
              />
            </Button>
            <FormHelperText>{rest?.helperText}</FormHelperText>
          </FormControl>
        )}
      />
      {rest?.displayImages && uploadFiles && uploadFiles?.length > 0 && (
        <Box sx={{ flexGrow: 1, width: "100%" }}>
          <UploadedImageGallery
            uploadedFile={uploadFiles}
            handleUpdateFiles={UpdateFiles}
            handleDeleteFiles={handleDelete}
          />
        </Box>
      )}
    </Box>
  );
};
export default FileUploadField;
