"use client";

import React from "react";
import { CommonBoxContainer } from "../../common/Layout/Box";
import { CommonTypographyComponenet } from "../../common/dataDisplay/Typography";
import TemplateRenderer from "./TemplateRenderer";
import { useAppSelector } from "@/store/hook";
import { DropZone } from "@measured/puck";

export interface DynamicContentProps {
  index: number;
  databasePath: string;
  key: string;
}

export const NestedTemplateRenderer = (props: DynamicContentProps) => {
  const { key = "person.addresses", index, databasePath } = props;
  const AllData = useAppSelector((state) => state.tableData.data);
  const dataForDBPath =
    AllData && AllData?.filter((data) => data?.key === databasePath);
  const specificDataForDBPath =
    dataForDBPath && dataForDBPath?.length > 0 && dataForDBPath[0]?.value;

  //   util function
  function getDataAtIndexAndKey(index, keyPath, dataArray) {
    // Check if index is within bounds
    if (index < 0 || index >= dataArray.length) {
      return null; // Return null if index is out of bounds
    }

    // Split key path into keys
    const keys = keyPath.split(".");

    // Initialize current object
    let currentObject = dataArray[index];

    // Traverse through keys to access nested objects
    for (const key of keys) {
      if (!currentObject || typeof currentObject !== "object") {
        return null; // Return null if any intermediate object is null or not an object
      }
      currentObject = currentObject[key];
    }

    return currentObject;
  }

  return (
    <div>
      <CommonBoxContainer>
        <DropZone zone="dynamic-nested-content" />
        <CommonTypographyComponenet variant="h6">
          Nested Preview Content In progress not ready to use
        </CommonTypographyComponenet>
        {key && (
          <TemplateRenderer
            array={getDataAtIndexAndKey(index, key, specificDataForDBPath)}
          >
            {(index) => (
              <div>
                <DropZone zone="dynamic-nested-content" />
              </div>
            )}
          </TemplateRenderer>
        )}
      </CommonBoxContainer>
    </div>
  );
};
