"use client";
import FormBuilder from "../commonFormBuilder";
import { FormRenderProps, IFormRender } from "@/types/formRender";
import { IIFormBUilderFieldName } from "@/types/formBuilder";
import { useAppDispatch } from "@/store/hook";
import addDocument from "@/database/operation/action";

interface EditorFormProps {
  databasePath: string;
  formTitle: string;
  storeValueAs?: string;
  defaultValues?: any;
  appendJson?: IIFormBUilderFieldName;
  formJsonData?: FormRenderProps;
  formData?: IFormRender[];
}

const EditorForm = (props: EditorFormProps) => {
  const {
    databasePath,
    formTitle,
    defaultValues,
    appendJson,
    formJsonData,
    storeValueAs,
    formData,
  } = props;

  const dispatch = useAppDispatch();

  const handleSubmit = async (data) => {
    if (databasePath && data) {
      delete data.array;
      const { error } = await addDocument(databasePath, data);
      console.log(data);
      if (error) {
        console.log(error);
        return dispatch({
          type: "SET_NOTISTACKMESSAGE_DATA",
          payload: { message: "Something went wrong", variant: "error" },
        });
      }
      return dispatch({
        type: "SET_NOTISTACKMESSAGE_DATA",
        payload: { message: "Success", variant: "success" },
      });
    }
  };

  return (
    <FormBuilder
      title={formTitle}
      onSubmit={handleSubmit}
      formData={formData}
      defaultValues={defaultValues || {}}
      appendJson={appendJson}
      formJsonData={formJsonData}
      storeValueAs={storeValueAs}
    />
  );
};
export default EditorForm;
