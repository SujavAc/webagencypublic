"use client";
import { useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import { getPagesData } from "@/store/action/pages/pageAction";
import { WhereCondition } from "@/types/firebase/where";
import { connect } from "react-redux";
import ComponentRenderer from "../ComponentMap/ComponentRendere";

const About = (props) => {
  const { getPagesData } = props;
  // get data from pages from database

  const pagesData = useAppSelector((state) => state.pages.pagesData);
  const aboutUsData = pagesData?.filter((data) => data.pageName === "aboutus");
  console.log(aboutUsData);
  const databasePath = "pages";
  const limit = 1;

  useEffect(() => {
    if (pagesData && pagesData.length > 0) {
      return;
    }
    const condition: WhereCondition = {
      key: "pageName",
      filterOperation: "==",
      value: "aboutus",
    };
    // get data from database and update the pages reducer
    getPagesData(databasePath, limit, condition);
  }, []);

  // from each id
  // if data exist, get data from store
  // else calling database to get the value and update store\

  // if data update fron dashboard
  // update the database and store at the same time to the unique id, will also update the ui

  // component map to get the component and pass the value getting from store

  return (
    <>
      {aboutUsData && aboutUsData?.length > 0 && (
        <ComponentRenderer {...aboutUsData[0]} />
      )}
    </>
  );
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    getPagesData: (dbCollection: any, limit: any, condition?: WhereCondition) =>
      dispatch(getPagesData(dbCollection, limit, condition)),
  };
};
export default connect(null, mapDispatchToProps)(About);
