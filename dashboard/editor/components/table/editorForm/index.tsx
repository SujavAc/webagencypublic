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
      delete data?.array;
      const { error } = await addDocument(databasePath, data);
      if (error) {
        dispatch({
          type: "SET_NOTISTACKMESSAGE_DATA",
          payload: { message: "Something went wrong", variant: "error" },
        });
        return { error: true, success: false };
      }
      dispatch({
        type: "SET_NOTISTACKMESSAGE_DATA",
        payload: { message: "Success", variant: "success" },
      });
      return { error: false, success: true };
    } else {
      dispatch({
        type: "SET_NOTISTACKMESSAGE_DATA",
        payload: {
          message: "Raised an issue to IT Department",
          variant: "info",
        },
      });
      return { error: true, success: false };
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
