"use client";
import ButtonComponent from "@/components/Common/Button";
import StackLayout from "@/components/Layout/Stack";
import { useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import { connect } from "react-redux";
import DataTable from "@/components/Common/DataTable";
import {
  LoadMoreHeroBannerData,
  addHeroBannerData,
  deleteHeroBannerData,
  getHeroBannerData,
  updateHeroBannerData,
} from "@/store/action/component/heroBannerAction";
import Hero from "@/components/Hero";
import HeroBannerForm from "@/components/Forms/FormLists/HeroBannerForm";

const HeroBanner = (props) => {
  const {
    addHeroBannerData,
    getHeroBannerData,
    loadMoreHeroBannerData,
    deleteHeroBannerData,
    updateHeroBannerData,
  } = props;

  const databasePath = "components/componentLists/heroBanner";

  const limit = 2 || process.env.NEXT_PUBLIC_LIMIT;
  const heroBannerData = useAppSelector(
    (state) => state.heroBanner.heroBannerData,
  );
  const lastDocumentRead = useAppSelector(
    (state) => state.heroBanner.lastDocumentRead,
  );
  useEffect(() => {
    if (!heroBannerData || heroBannerData?.length < 1) {
      getHeroBannerData(databasePath, limit);
    }
  }, []);

  const handleUpdate = (data, id) => {
    if (!id || !data) {
      return;
    }
    return updateHeroBannerData(databasePath, id, data);
  };

  const tableHeadCells = [
    // first array is used to filter the result too and iterate and display the value in table using id
    { id: "title", label: "Title", disableSorting: false },
    { id: "action", label: "Action", disableSorting: true },
  ];

  return (
    <StackLayout
      noOfItems={[
        <DataTable
          key="dataTable1"
          item={heroBannerData}
          addItem={addHeroBannerData}
          dbPath={databasePath}
          deleteItem={deleteHeroBannerData}
          DisplayAs={Hero}
          updateItem={handleUpdate}
          Form={HeroBannerForm}
          headCells={tableHeadCells}
        />,
        <ButtonComponent
          key="button"
          disabled={!lastDocumentRead}
          variant="outlined"
          onClick={() =>
            loadMoreHeroBannerData(databasePath, lastDocumentRead, limit)
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
    addHeroBannerData: (dbCollection: any, data: any) =>
      dispatch(addHeroBannerData(dbCollection, data)),
    getHeroBannerData: (dbCollection: any, limit: any) =>
      dispatch(getHeroBannerData(dbCollection, limit)),
    loadMoreHeroBannerData: (
      dbCollection: any,
      lastDocumentRead: any,
      limit: any,
    ) =>
      dispatch(LoadMoreHeroBannerData(dbCollection, lastDocumentRead, limit)),
    deleteHeroBannerData: (dbCollection: any, id: string) =>
      dispatch(deleteHeroBannerData(dbCollection, id)),
    updateHeroBannerData: (dbCollection: any, id: string, updatedData: any) =>
      dispatch(updateHeroBannerData(dbCollection, id, updatedData)),
  };
};

export default connect(null, mapDispatchToProps)(HeroBanner);
