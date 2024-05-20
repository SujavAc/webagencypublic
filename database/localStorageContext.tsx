import { filterOutArrayByKeyValuePair, findObject } from "@/utils/array";
import React, { createContext, useContext, useEffect, useState } from "react";

// Create a context
const LocalStorageContext = createContext({
  localValue: [],
  addItemInLocalStorage: (key: string, data: any) => {},
  setItemInLocalStorage: (key: string, data: any) => {},
  deleteDataFromList: (key: string, fkey: string, fvalue: any) => {},
  deleteData: (key: string) => {},
  updateItemInLocalStorage: (key: string, data: any) => {},
  defaultActiveConfigData: {},
  getItemInLocalStorage: (key: string) => [],
});

// Context provider component
export const LocalStorageProvider = ({ children }) => {
  const localStorageKey =
    process.env.NEXT_PUBLIC_LOCALSTORAGEKEY || "firebaseImportTestWithProvider";

  const [localValue, setLocalValue] = useState(() => {
    // Retrieve localValue from local storage on component mount
    const storedValue = localStorage.getItem(localStorageKey);
    return storedValue ? JSON.parse(storedValue) : null;
  });
  const addItemInLocalStorage = (key = localStorageKey, data) => {
    if (typeof Storage !== "undefined") {
      const dataExistInLocalStorage =
        localValue &&
        findObject(localValue, {
          projectId: data?.projectId,
        });
      if (!dataExistInLocalStorage) {
        const restOfLocalData = localValue && localValue?.length > 0;
        const firebaseImport = restOfLocalData
          ? [...localValue, { projectId: data?.projectId, data }]
          : [{ projectId: data?.projectId, data }];
        setLocalValue(firebaseImport);
        localStorage.setItem(key, JSON.stringify(firebaseImport));
        return { error: false, success: true };
      } else {
        // updating existing local data
        const index = localValue.findIndex(
          (eData) => eData.projectId === data?.projectId
        );
        let updateData = localValue;
        if (index !== -1) {
          updateData[index] = { projectId: data?.projectId, data };
          setLocalValue(updateData);
          return localStorage.setItem(key, JSON.stringify(updateData));
        }
      }
    }
    return { error: true, success: false };
  };

  const updateItemInLocalStorage = (key = localStorageKey, data) => {
    if (typeof Storage !== "undefined") {
      // updating existing local data
      const index = localValue.findIndex(
        (eData) => eData.projectId === data?.projectId
      );
      let updateData = localValue;
      if (index !== -1) {
        updateData[index] = { projectId: data?.projectId, data };
        setLocalValue(updateData);
        return localStorage.setItem(key, JSON.stringify(updateData));
      }
    }
  };

  const setItemInLocalStorage = (key = localStorageKey, data) => {
    if (!data) {
      return;
    }
    setLocalValue(data);
    return localStorage.setItem(key, JSON.stringify(data));
  };

  const getItemInLocalStorage = (key = localStorageKey) => {
    if (!key) {
      return;
    }
    const item = localStorage.getItem(key);
    return item && JSON.parse(item);
  };

  const deleteDataFromList = (key = localStorageKey, fkey, fvalue) => {
    if (!fkey || !key || !fvalue) {
      return null;
    }
    const isExistingValue = findObject(localValue, { [fkey]: fvalue });
    if (isExistingValue) {
      const filteredDataInLocalStorage = filterOutArrayByKeyValuePair(
        localValue,
        fkey,
        fvalue
      );
      setItemInLocalStorage(key, filteredDataInLocalStorage);
    }
  };

  const deleteData = (key = localStorageKey) => {
    setLocalValue([]);
    return key && localStorage.removeItem(key);
  };

  const defaultActiveConfigData = localValue?.filter(
    (val) => val?.defaultActive
  )[0];

  useEffect(() => {
    const handleStorageChange = () => {
      // Handle changes in local storage
      const newValue = localStorage.getItem(localStorageKey);
      setLocalValue(newValue ? JSON.parse(newValue) : []);
    };

    // Listen for storage changes
    window.addEventListener("storage", handleStorageChange);

    return () => {
      // Cleanup event listener
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  //   useEffect(() => {
  //     setLocalValue(localValue);
  //     console.log("localvalue changes", localValue);
  //   }, [localValue]);

  return (
    <LocalStorageContext.Provider
      value={{
        localValue,
        addItemInLocalStorage,
        setItemInLocalStorage,
        deleteDataFromList,
        deleteData,
        updateItemInLocalStorage,
        defaultActiveConfigData,
        getItemInLocalStorage,
      }}
    >
      {children}
    </LocalStorageContext.Provider>
  );
};

// Custom hook to use the context
export const useLocalStorage = () => {
  return useContext(LocalStorageContext);
};
