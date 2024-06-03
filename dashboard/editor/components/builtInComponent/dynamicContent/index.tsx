"use client";

import React, { useEffect } from "react";
import TemplateRenderer from "./TemplateRenderer";
import { DropZone } from "@measured/puck";
import { useAppSelector } from "@/store/hook";
import { connect } from "react-redux";
import {
  LoadMoreDataFromCollection,
  getDataFromCollection,
} from "@/store/action/editor/tableAction";
import CommonButtonWrapper from "../../common/Inputs/Button";

export interface DynamicContentProps {
  databasePath: string;
  limit: number;
  dynamicValue?: boolean;
  getDataFromCollection?: (dbCollection: any, limit: any) => void;
  loadMoreDataFromCollection?: (
    dbCollection: any,
    lastDocumentRead: any,
    limit: any
  ) => void;
  loadMoreButton?: boolean;
}

const DynamicContent = (props: DynamicContentProps) => {
  const {
    getDataFromCollection,
    loadMoreDataFromCollection,
    databasePath,
    limit = 5,
    dynamicValue = false,
    loadMoreButton = false,
  } = props;
  const AllData = useAppSelector((state) => state.tableData.data);
  const dataForDBPath =
    AllData && AllData?.filter((data) => data?.key === databasePath);
  const specificDataForDBPath =
    dataForDBPath && dataForDBPath?.length > 0 ? dataForDBPath[0]?.value : [];

  // last document read
  const lastDocumentRead = useAppSelector(
    (state) => state.tableData.lastDocumentRead
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
      !specificDataForDBPath ||
      (dynamicValue &&
        specificDataForDBPath &&
        specificDataForDBPath?.length < 1 &&
        limit &&
        databasePath)
    ) {
      console.log("dynamic data, getting from database");
      getDataFromCollection(databasePath, limit);
    }
  }, [dynamicValue]);

  if (!databasePath && !dynamicValue) {
    return null;
  }

  return (
    <>
      {specificDataForDBPath && specificDataForDBPath?.length > 0 && (
        <TemplateRenderer array={specificDataForDBPath}>
          {(index) => (
            <>
              <DropZone zone="dynamic-content" />
            </>
          )}
        </TemplateRenderer>
      )}
      {loadMoreButton && lastDocumentReadData && (
        <CommonButtonWrapper
          disabled={!lastDocumentReadData}
          variant="outlined"
          onClick={() =>
            loadMoreDataFromCollection(
              databasePath,
              lastDocumentReadData,
              limit
            )
          }
        >
          Load More
        </CommonButtonWrapper>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getDataFromCollection: (dbCollection: any, limit: any) =>
      dispatch(getDataFromCollection(dbCollection, limit)),
    loadMoreDataFromCollection: (
      dbCollection: any,
      lastDocumentRead: any,
      limit: any
    ) =>
      dispatch(
        LoadMoreDataFromCollection(dbCollection, lastDocumentRead, limit)
      ),
  };
};

export default connect(null, mapDispatchToProps)(DynamicContent);
