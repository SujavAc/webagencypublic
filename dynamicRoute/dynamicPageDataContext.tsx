"use client";
import React, { createContext, useContext, useState } from "react";

// Create the context
const PageContentContext = createContext({
  pageContentData: {},
  setPageContentData: (value: any) => {},
});

// Create a provider component
export const PageContentProvider = ({ children }) => {
  const [pageContentData, setPageContentData] = useState(null);

  return (
    <PageContentContext.Provider
      value={{ pageContentData, setPageContentData }}
    >
      {children}
    </PageContentContext.Provider>
  );
};
// Custom hook to use the context
export const usePageContentContext = () => {
  return useContext(PageContentContext);
};
