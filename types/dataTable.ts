import { TableCellProps } from "@mui/material";


export type DataTableProps = {
  item: any;
  addItem: (path: string, data:any)=> void;
  dbPath: string;
  deleteItem: (dbPath: string, id:string)=> void;
  updateItem: (data: any, id:string)=> void;
  Form: any;
  DisplayAs?: any;
  headCells: TableCellProps[];
};
