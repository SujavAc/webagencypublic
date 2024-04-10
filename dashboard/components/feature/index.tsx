"use client";
import ButtonComponent from "@/components/Common/Button";
import StackLayout from "@/components/Layout/Stack";
import { useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import { connect } from "react-redux";
import DataTable from "@/components/Common/DataTable";
import {
  LoadMoreFeaturesData,
  addFeaturesData,
  deleteFeaturesData,
  getFeaturesData,
  updateFeaturesData,
} from "@/store/action/component/featureAction";
import FeatureForm from "@/components/Forms/FormLists/FeatureForm";
import Features from "@/components/Features";

const Feature = (props) => {
  const {
    addFeaturesData,
    getFeaturesData,
    loadMoreFeaturesData,
    deleteFeaturesData,
    updateFeaturesData,
  } = props;

  // const propsNeede = { 
  //   databasePath: "components/componentLists/features",
  //   limit: 10,
  //   storeData: '',
  //   componentName: 'features',
  //   tableHeadCells: {id: "", label: "", disableSorting: false}
  // }

  const databasePath = "components/componentLists/features";

  const limit = 2 || process.env.NEXT_PUBLIC_LIMIT;
  const featuresData = useAppSelector((state) => state.features.featuresData);
  const lastDocumentRead = useAppSelector(
    (state) => state.features.lastDocumentRead,
  );
  useEffect(() => {
    if (!featuresData || featuresData?.length < 1) {
      getFeaturesData(databasePath, limit);
    }
  }, []);

  const handleUpdate = (data, id) => {
    if (!id || !data) {
      return;
    }
    return updateFeaturesData(databasePath, id, data);
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
          key="featuresDataTable"
          item={featuresData}
          addItem={addFeaturesData}
          dbPath={databasePath}
          deleteItem={deleteFeaturesData}
          updateItem={handleUpdate}
          Form={FeatureForm}
          headCells={tableHeadCells}
          DisplayAs={Features}
        />,
        <ButtonComponent
          key="button"
          disabled={!lastDocumentRead}
          variant="outlined"
          onClick={() =>
            loadMoreFeaturesData(databasePath, lastDocumentRead, limit)
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
    addFeaturesData: (dbCollection: any, data: any) =>
      dispatch(addFeaturesData(dbCollection, data)),
    getFeaturesData: (dbCollection: any, limit: any) =>
      dispatch(getFeaturesData(dbCollection, limit)),
    loadMoreFeaturesData: (
      dbCollection: any,
      lastDocumentRead: any,
      limit: any,
    ) => dispatch(LoadMoreFeaturesData(dbCollection, lastDocumentRead, limit)),
    deleteFeaturesData: (dbCollection: any, id: string) =>
      dispatch(deleteFeaturesData(dbCollection, id)),
    updateFeaturesData: (dbCollection: any, id: string, updatedData: any) =>
      dispatch(updateFeaturesData(dbCollection, id, updatedData)),
  };
};

export default connect(null, mapDispatchToProps)(Feature);
