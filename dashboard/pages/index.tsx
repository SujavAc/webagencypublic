"use client";
import ButtonComponent from "@/components/Common/Button";
import StackLayout from "@/components/Layout/Stack";
import { useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import { connect } from "react-redux";
import DataTable from "@/components/Common/DataTable";
import PageForm from "@/components/Forms/FormLists/PageForm";
import {
  LoadMorePagesData,
  addPagesData,
  deletePagesData,
  getPagesData,
  updatePagesData,
} from "@/store/action/pages/pageAction";
import PageList from "./pageList";
import { useRouter } from "next/navigation";
import { findObject } from "@/utils/array";

const Pages = (props) => {
  const {
    addPagesData,
    getPagesData,
    loadMorePagesData,
    deletePagesData,
    updatePagesData,
  } = props;

  const databasePath = "pages";

  const router = useRouter();

  const limit = 2 || process.env.NEXT_PUBLIC_LIMIT;
  const pagesData = useAppSelector((state) => state.pages.pagesData);
  console.log(pagesData);
  const lastDocumentRead = useAppSelector(
    (state) => state.pages.lastDocumentRead,
  );
  useEffect(() => {
    if (!pagesData || pagesData?.length < 1) {
      getPagesData(databasePath, limit);
    }
  }, []);

  const handleUpdate = (data, id) => {
    if (!id || !data) {
      return;
    }
    console.log(data, id);
    const dataWithIdFromStore = findObject(pagesData, { id: id });
    if (dataWithIdFromStore?.pageName !== data?.pageName) {
      updatePagesData(databasePath, id, data);
    }
    return router.push(`/dashboard/editor?id=${id}&pageName=${data?.pageName}`);
  };

  const tableHeadCells = [
    // first array is used to filter the result too and iterate and display the value in table using id
    { id: "pageName", label: "Page Name", disableSorting: false },
    // { id: "paragraph", label: "Paragraph", disableSorting: false },
    { id: "action", label: "Action", disableSorting: true },
  ];

  return (
    <StackLayout
      noOfItems={[
        <DataTable
          key="pagesDataTable"
          item={pagesData}
          addItem={addPagesData}
          dbPath={databasePath}
          deleteItem={deletePagesData}
          updateItem={handleUpdate}
          Form={PageForm}
          headCells={tableHeadCells}
          // DisplayAs={PageList}
        />,
        <ButtonComponent
          key="button"
          disabled={!lastDocumentRead}
          variant="outlined"
          onClick={() =>
            loadMorePagesData(databasePath, lastDocumentRead, limit)
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
    addPagesData: (dbCollection: any, data: any) =>
      dispatch(addPagesData(dbCollection, data)),
    getPagesData: (dbCollection: any, limit: any) =>
      dispatch(getPagesData(dbCollection, limit)),
    loadMorePagesData: (dbCollection: any, lastDocumentRead: any, limit: any) =>
      dispatch(LoadMorePagesData(dbCollection, lastDocumentRead, limit)),
    deletePagesData: (dbCollection: any, id: string) =>
      dispatch(deletePagesData(dbCollection, id)),
    updatePagesData: (dbCollection: any, id: string, updatedData: any) =>
      dispatch(updatePagesData(dbCollection, id, updatedData)),
  };
};

export default connect(null, mapDispatchToProps)(Pages);
