"use client";
import { useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import { connect } from "react-redux";
import {
  getDataFromCollection,
  LoadMoreDataFromCollection,
  addData,
  deleteData,
  updateData,
} from "@/store/action/editor/tableAction";
import FormBuilderForTable from "../commonFormBuilder";
import { IIFormBUilderFieldName } from "@/types/formBuilder";
import { FormRenderProps, IFormRender } from "@/types/formRender";
import StackLayout from "../../common/Layout/Stack";
import DataTable from "../../common/DataTable";
import ButtonComponent from "../../common/Inputs/Button";

interface ICrudTable {
  id: string;
  tableFor: string;
  databasePath: string;
  limit: number;
  addData: (dbCollection: any, data: any) => void;
  getDataFromCollection: (dbCollection: any, limit: any) => void;
  loadMoreDataFromCollection: (
    dbCollection: any,
    lastDocumentRead: any,
    limit: any,
  ) => void;
  deleteData: (dbCollection: any, id: string) => void;
  updateData: (dbCollection: any, id: string, updatedData: any) => void;
  tableHeadCells: TableHeadCellsProps[];
  appendJson?: IIFormBUilderFieldName;
  formJsonData?: FormRenderProps;
  formData?: IFormRender[];
  storeValueAs?: string;
}

interface TableHeadCellsProps {
  id: string;
  label: string;
  disableSorting: boolean;
}

const CrudTable = (props: ICrudTable) => {
  const {
    id,
    databasePath,
    limit = 5,
    addData,
    getDataFromCollection,
    loadMoreDataFromCollection,
    deleteData,
    updateData,
    tableHeadCells,
    appendJson,
    formJsonData,
    formData,
    storeValueAs,
    tableFor,
  } = props;

  const AllData = useAppSelector((state) => state.tableData.data);
  const dataForDBPath =
    AllData && AllData?.filter((data) => data?.key === databasePath);
  const specificDataForDBPath =
    dataForDBPath && dataForDBPath?.length > 0 && dataForDBPath[0]?.value;

  const lastDocumentRead = useAppSelector(
    (state) => state.tableData.lastDocumentRead,
  );

  const lastDocumentReadForDBPath =
    lastDocumentRead &&
    lastDocumentRead?.filter((lastRead) => lastRead?.key === databasePath);
  const lastDocumentReadData =
    lastDocumentReadForDBPath &&
    lastDocumentReadForDBPath?.length > 0 &&
    lastDocumentReadForDBPath[0]?.value;

  useEffect(() => {
    if (
      !dataForDBPath ||
      (dataForDBPath?.length < 1 && dataForDBPath && limit && databasePath)
    ) {
      getDataFromCollection(databasePath, limit);
    }
  }, []);

  const handleUpdate = (data, id) => {
    if (!id || !data) {
      return;
    }
    return updateData(databasePath, id, data);
  };

  return (
    <StackLayout
      id={id}
      noOfItems={[
        <DataTable
          key="featuresDataTable"
          tableHeading={tableFor}
          item={specificDataForDBPath}
          addItem={addData}
          dbPath={databasePath}
          deleteItem={deleteData}
          updateItem={handleUpdate}
          Form={FormBuilderForTable}
          appendJson={appendJson}
          formJsonData={formJsonData}
          formData={formData}
          storeValueAs={storeValueAs}
          headCells={tableHeadCells}
        />,
        <ButtonComponent
          key="button"
          disabled={!lastDocumentReadData}
          variant="outlined"
          onClick={() =>
            loadMoreDataFromCollection(
              databasePath,
              lastDocumentReadData,
              limit,
            )
          }
        >
          Load more
        </ButtonComponent>,
      ]}
      stackProps={{
        direction: "column",
        useFlexGap: true,
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "flex-start",
        spacing: 3,
      }}
    />
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addData: (dbCollection: any, data: any) =>
      dispatch(addData(dbCollection, data)),
    getDataFromCollection: (dbCollection: any, limit: any) =>
      dispatch(getDataFromCollection(dbCollection, limit)),
    loadMoreDataFromCollection: (
      dbCollection: any,
      lastDocumentRead: any,
      limit: any,
    ) =>
      dispatch(
        LoadMoreDataFromCollection(dbCollection, lastDocumentRead, limit),
      ),
    deleteData: (dbCollection: any, id: string) =>
      dispatch(deleteData(dbCollection, id)),
    updateData: (dbCollection: any, id: string, updatedData: any) =>
      dispatch(updateData(dbCollection, id, updatedData)),
  };
};

export default connect(null, mapDispatchToProps)(CrudTable);
