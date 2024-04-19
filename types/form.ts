import { IIFormBUilderFieldName } from "./formBuilder";
import { FormRenderProps, IFormRender } from "./formRender";

export type FormProps = {
    title: string;
    storeValueAs: string;
    defaultValues?: any;
    onSubmit: (data: any) => Promise<{ error: boolean; success: boolean }>;
    appendJson?: IIFormBUilderFieldName;
    formJsonData?: FormRenderProps;
    formData?: IFormRender[];
};
