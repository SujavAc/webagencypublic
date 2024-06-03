import { OrderByDirection, WhereFilterOp } from "firebase/firestore";

export interface WhereCondition {
  key?: string;
  filterOperation?: WhereFilterOp;
  value?: string | number | any;
}

export interface orderByCondition {
  fieldPath: string;
  filterOperation: OrderByDirection;
}
