"use client";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import React from "react";
import QuillNoSSRWrapper from "react-quill";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    [{ direction: "rtl" }],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

interface RTLProps {
  title?: string;
  updatedData?: (content: any) => void;
  readonly?: boolean;
  contentData?: string;
  style?: any;
  error?: boolean;
}

export default function RTE(props: RTLProps) {
  const { updatedData, title, readonly, contentData, style, error } = props;
  const theme = useTheme();
  // const [data, setData] = useState();
  const handleChange = (delta: any, oldDelta: any, source: any) => {
    if (source == "api") {
      const message = delta === "<p><br></p>" ? "" : delta;
      // setData(delta === "<p><br></p>" ? "" : delta);
      updatedData && updatedData(message);
    } else if (source == "user") {
      const message = delta === "<p><br></p>" ? "" : delta;
      // setData(delta === "<p><br></p>" ? "" : delta);
      updatedData && updatedData(message);
    }
  };

  return (
    <React.Fragment>
      {title && (
        <Typography
          variant="subtitle2"
          color={error ? theme.palette.error.main : "text.secondary"}
        >
          {title}
        </Typography>
      )}
      <QuillNoSSRWrapper
        modules={readonly ? {} : modules}
        formats={readonly ? [] : formats}
        theme="snow"
        onChange={handleChange}
        value={contentData || ""}
        readOnly={readonly}
        style={{ width: "100%", ...style }}
      />
    </React.Fragment>
  );
}

// usage
{
  /*

  <RTEEditor
         control={control}
          name="description"
          rules={{
            required: true,
          }}
          label="Blog Description"
          helperText= "Please enter your blog description"
          key='blogDescription'
        />,
        
<RTL updatedData={(data: any) => getData(data)}></RTL> */
}
