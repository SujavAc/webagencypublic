import { TableCellProps } from "@mui/material";
import { IIFormBUilderFieldName } from "./formBuilder";
import { FormRenderProps, IFormRender } from "./formRender";


export type DataTableProps = {
  item: any;
  tableHeading: string;
  addItem: (path: string, data:any)=> void;
  dbPath: string;
  deleteItem: (dbPath: string, id:string)=> void;
  updateItem: (data: any, id:string)=> void;
  Form: any;
  DisplayAs?: any;
  headCells: TableHeadCellsProps[];
  appendJson?: IIFormBUilderFieldName;
  formJsonData?: FormRenderProps;
  formData?: IFormRender[];
  storeValueAs?: string
};

interface TableHeadCellsProps {
  id: string;
  label: string;
  disableSorting: boolean;
}
