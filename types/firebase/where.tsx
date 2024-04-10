import { WhereFilterOp } from "firebase/firestore";

export interface WhereCondition {
  key?: string;
  filterOperation?: WhereFilterOp;
  value?: string | number | any;
}
