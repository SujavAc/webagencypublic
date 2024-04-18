"use client";
import { Button, FormControl, FormHelperText } from "@mui/material";
import { Controller } from "react-hook-form";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styled from "styled-components";

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
  const renderImages = (e) => {
    const files = e.target.files;
    document.getElementById("imagePreview").removeChild;
    if (files) {
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var reader = new FileReader(); // Create a new FileReader object

        // Use a closure to ensure the onload function properly references its corresponding file
        reader.onload = (function (file) {
          return function (e) {
            var img = document.createElement("img"); // Create an img element
            img.setAttribute("src", `${e.target.result}`); // Set the src attribute to the FileReader result
            img.style.maxWidth = "200px"; // Set a maximum width for display
            img.style.borderRadius = "8px";
            document.getElementById("imagePreview").appendChild(img); // Append the img element to the imagePreview div
          };
        })(file);

        reader.readAsDataURL(file); // Read the file as a data URL
      }
    }
  };

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormControl error={!!error}>
            <Button
              component="label"
              role={undefined}
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              {...fieldProps}
            >
              {fieldProps?.label}
              <VisuallyHiddenInput
                type="file"
                multiple={rest.multiple || false}
                onChange={(e) => {
                  onChange(e.target.files);
                  renderImages(e);
                }}
              />
            </Button>
            <FormHelperText>{rest?.helperText}</FormHelperText>
            {rest?.displayImages && (
              <>
                <span id="imagePreview"></span>
              </>
            )}
          </FormControl>
        )}
      />
    </>
  );
};
export default FileUploadField;
