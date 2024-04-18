import { ReactElement } from "react";

export interface IFormRender {
    name: string;
    helperText?: string;
    type: string;
    rules?: IFormRules;
    fieldProps: IFieldProps;
  }
  interface IFormRules {
    required?: boolean;
    maxLength?: number;
    max?: number;
    min?: number;
    pattern?: any;
  }
  interface IFieldProps {
    label: string;
    variant?: string;
    multiline?: boolean;
    rows?: number;
    options?: IFieldOption[];
  }
  
  interface IFieldOption {
    label?: string;
    value?: string | number;
  }
  
  export type FormRenderProps = {
    formData: IFormRender[];
    index?: number;
    control?: any;
    children?: ReactElement
    storeValueAs?: string
  }