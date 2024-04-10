import { Slider, FormLabel, FormHelperText } from "@mui/material";

export const ImageConfig = {
    src: {
        type: "text",
    },
  alt: {
    type: "text",
  },
   height: {
        type: "number",
    },
  width: {
    type: "number",
  },
  quality: {
    type: "number",
  },
  loading: {
    type: "select",
    options: [
         { label: 'Auto', value: 'auto' },
        { label: 'Eager', value: 'eager' },
        { label: 'Lazy', value: 'lazy' },
        { label: 'None', value: 'none' },
    ]
  },
  sizes: {
    type: "text",
  },
  style: {
    type: "object",
    objectFields: {
        objectFit: {
            type: "select",
            options: [
                { label: 'Fill', value: 'fill' },
                { label: 'Contain', value: 'contain' },
                { label: 'Cover', value: 'cover' },
                { label: 'None', value: 'none' },
                { label: 'Scale Down', value: 'scale-down' },
                // Add more options as needed
            ],
        },
        // borderRadius: {
        //     type: "text"
        // },
        borderRadius: {
          type: "custom",
          render: ({ name, onChange, value }) => (
            <>
                <Slider onChange={(e,value) => onChange(value)} value={value} valueLabelDisplay="auto"/>
                <FormHelperText>Border Radius</FormHelperText>
            </>
          ),
        },
    }
    
  },
};
