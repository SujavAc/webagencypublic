"use client";
import {
  getAllQueryParameters,
  getQueryParameter,
} from "@/utils/editor/urlParameter";
import Editor from "./editor";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hook";
import {
  findObject,
  objectContainsKeys,
  partOfObjectExists,
} from "@/utils/array";
import { WhereCondition } from "@/types/firebase/where";
import {
  isExistingData,
  updatePagesData,
} from "@/store/action/pages/pageAction";
import { connect } from "react-redux";

interface EditorValidationProps {
  isExistingData: (
    dbCollection: string,
    whereCondition: WhereCondition,
  ) => void;
  updatePagesData: (dbCollection: string, id: string, updateData: any) => void;
}

const EditorValidation = (props: EditorValidationProps) => {
  const initialData = {
    content: [],
    root: {
      title: getQueryParameter("pageName") || "",
    },
  };
  const { isExistingData, updatePagesData } = props;
  const [dataExists, setDataExists] = useState(false);
  const [data, setData] = useState(initialData);
  const [id, setID] = useState(null);
  const [pageName, setPageName] = useState(null);
  // Describe the initial data
  const pagesData = useAppSelector((state) => state.pages.pagesData);
  const databasePath = "pages";

  const handleUpdate = (data: any) => {
    if (!data) {
      return;
    }
    return updatePagesData(databasePath, id, data);
  };

  useEffect(() => {
    const fetchData = async () => {
      // Check if id exists in the query params
      if (id && pageName) {
        if (pagesData && pagesData?.length > 0) {
          console.log(findObject(pagesData, { pageName: pageName }));
          const getObjectContainsPageName = findObject(pagesData, {
            pageName: pageName,
          });
          const objectContainsKeysInData = objectContainsKeys(
            getObjectContainsPageName,
            ["content", "root"],
          );
          if (objectContainsKeysInData) {
            setData(findObject(pagesData, { pageName: pageName }));
          } else {
            setData(initialData);
          }
          return setDataExists(partOfObjectExists(pagesData, { id, pageName }));
        }
        return isExistingData(databasePath, {
          key: "pageName",
          filterOperation: "==",
          value: pageName,
        })
          .then(({ isExist, data }) => {
            const getObjectContainsPageName = findObject(data, {
              pageName: pageName,
            });
            const objectContainsKeysInData = objectContainsKeys(
              getObjectContainsPageName,
              ["content", "root"],
            );
            console.log(objectContainsKeysInData);
            if (objectContainsKeysInData) {
              setData(data[0]);
            } else {
              setData(initialData);
            }
            return setDataExists(isExist);
          })
          .catch(() => {
            setData(null);
            return setDataExists(false);
          });
      }
    };
    fetchData();
  }, [pagesData, id, pageName, isExistingData]);

  const params = getAllQueryParameters();

  useEffect(() => {
    setID(params?.id);
    setPageName(params?.pageName);
  }, [params]);

  if (!dataExists) {
    return null;
  }

  return <Editor updateData={handleUpdate} iData={data} />;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    isExistingData: (dbCollection: any, whereCondition: WhereCondition) =>
      dispatch(isExistingData(dbCollection, whereCondition)),
    updatePagesData: (dbCollection: any, id: string, updatedData: any) =>
      dispatch(updatePagesData(dbCollection, id, updatedData)),
  };
};

export default connect(null, mapDispatchToProps)(EditorValidation);
