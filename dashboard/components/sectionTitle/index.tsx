"use client";
import ButtonComponent from "@/components/Common/Button";
import StackLayout from "@/components/Layout/Stack";
import { useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import { connect } from "react-redux";
import DataTable from "@/components/Common/DataTable";
import {
  LoadMoreSectionTitleData,
  addSectionTitleData,
  deleteSectionTitleData,
  getSectionTitleData,
  updateSectionTitleData,
} from "@/store/action/component/sectionTitleAction";
import SectionTitleForm from "@/components/Forms/FormLists/SectionTitleForm";
import SectionTitleComponent from "@/components/Common/SectionTitle";

const SectionTitle = (props) => {
  const {
    addSectionTitleData,
    getSectionTitleData,
    loadMoreSectionTitleData,
    deleteSectionTitleData,
    updateSectionTitleData,
  } = props;

  const databasePath = "components/componentLists/sectionTitle";

  const limit = 2 || process.env.NEXT_PUBLIC_LIMIT;
  const sectionTitleData = useAppSelector(
    (state) => state.sectionTitle.sectionTitleData,
  );
  const lastDocumentRead = useAppSelector(
    (state) => state.sectionTitle.lastDocumentRead,
  );
  useEffect(() => {
    if (!sectionTitleData || sectionTitleData?.length < 1) {
      getSectionTitleData(databasePath, limit);
    }
  }, []);

  const handleUpdate = (data, id) => {
    if (!id || !data) {
      return;
    }
    return updateSectionTitleData(databasePath, id, data);
  };

  const tableHeadCells = [
    // first array is used to filter the result too and iterate and display the value in table using id
    { id: "title", label: "Title", disableSorting: false },
    // { id: "paragraph", label: "Paragraph", disableSorting: false },
    { id: "action", label: "Action", disableSorting: true },
  ];

  return (
    <StackLayout
      noOfItems={[
        <DataTable
          key="sectionTitleDataTable"
          item={sectionTitleData}
          addItem={addSectionTitleData}
          dbPath={databasePath}
          deleteItem={deleteSectionTitleData}
          updateItem={handleUpdate}
          Form={SectionTitleForm}
          headCells={tableHeadCells}
          DisplayAs={SectionTitleComponent}
        />,
        <ButtonComponent
          key="button"
          disabled={!lastDocumentRead}
          variant="outlined"
          onClick={() =>
            loadMoreSectionTitleData(databasePath, lastDocumentRead, limit)
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
    addSectionTitleData: (dbCollection: any, data: any) =>
      dispatch(addSectionTitleData(dbCollection, data)),
    getSectionTitleData: (dbCollection: any, limit: any) =>
      dispatch(getSectionTitleData(dbCollection, limit)),
    loadMoreSectionTitleData: (
      dbCollection: any,
      lastDocumentRead: any,
      limit: any,
    ) =>
      dispatch(LoadMoreSectionTitleData(dbCollection, lastDocumentRead, limit)),
    deleteSectionTitleData: (dbCollection: any, id: string) =>
      dispatch(deleteSectionTitleData(dbCollection, id)),
    updateSectionTitleData: (dbCollection: any, id: string, updatedData: any) =>
      dispatch(updateSectionTitleData(dbCollection, id, updatedData)),
  };
};

export default connect(null, mapDispatchToProps)(SectionTitle);
