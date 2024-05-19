import { IIFormBUilderFieldName } from "./formBuilder";
import { FormRenderProps, IFormRender } from "./formRender";

export type FormProps = {
    id?: string;
    title: string;
    storeValueAs?: string;
    defaultValues?: any;
    onSubmit: (data: any) => Promise<{ error: boolean; success: boolean }>;
    appendJson?: IIFormBUilderFieldName;
    formJsonData?: FormRenderProps;
    formData?: IFormRender[];
    formFieldDirection?: "column" | "row" | "row-reverse" | "column-reverse"
};
