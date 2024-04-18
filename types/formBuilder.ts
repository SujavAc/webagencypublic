import { FormRenderProps } from "./formRender";

export type IFormBUilderProps = {
    fieldNames: IIFormBUilderFieldName;
    formJsonData: FormRenderProps;
    control?: any;
    storeValueAs?: string;
  }
  
export interface IIFormBUilderFieldName {
    name?: string;
  }