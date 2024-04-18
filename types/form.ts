import { IIFormBUilderFieldName } from "./formBuilder";
import { FormRenderProps, IFormRender } from "./formRender";

export type FormProps = {
    title: string;
    storeValueAs: string;
    defaultValues?: any;
    onSubmit: (data: any) => void;
    appendJson?: IIFormBUilderFieldName;
    formJsonData?: FormRenderProps;
    formData?: IFormRender[];
};
