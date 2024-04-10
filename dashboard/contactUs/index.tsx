"use client";
import ButtonComponent from "@/components/Common/Button";
import StackLayout from "@/components/Layout/Stack";
import {
  LoadMoreContactusData,
  addContactusData,
  deleteContactusData,
  getContactusData,
  updateContactusData,
} from "@/store/action/contactusAction";
import { useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import { connect } from "react-redux";
import DataTable from "@/components/Common/DataTable";
import ContactUsForm from "@/components/Forms/FormLists/ContactUsForm";

const ContactUs = (props) => {
  const {
    addContactusData,
    getContactusData,
    loadMoreContactusData,
    deleteContactusData,
    updateContactusData,
  } = props;

  const limit = 2 || process.env.NEXT_PUBLIC_LIMIT;
  const contactUsData = useAppSelector(
    (state) => state.contactUsData.contactUsData,
  );
  const lastDocumentRead = useAppSelector(
    (state) => state.contactUsData.lastDocumentRead,
  );
  useEffect(() => {
    if (!contactUsData || contactUsData?.length < 1) {
      getContactusData("contactus", limit);
    }
  }, [contactUsData, getContactusData, limit]);

  const handleUpdate = (data, id) => {
    if (!id || !data) {
      return;
    }
    return updateContactusData("contactus", id, data);
  };

  const tableHeadCells = [
    { id: "name", label: "Name", disableSorting: false },
    {
      id: "message",
      label: "Message",
      disableSorting: false,
    },
    {
      id: "email",
      label: "Email",
      disableSorting: false,
    },
    // { id: "title", label: "Data Type", disableSorting: false },
    { id: "action", label: "Action", disableSorting: true },
  ];

  return (
    <StackLayout
      noOfItems={[
        <DataTable
          key="dataTable"
          item={contactUsData}
          addItem={addContactusData}
          dbPath="contactus"
          deleteItem={deleteContactusData}
          updateItem={handleUpdate}
          Form={ContactUsForm}
          headCells={tableHeadCells}
        />,
        <ButtonComponent
          key="button"
          disabled={!lastDocumentRead}
          variant="outlined"
          onClick={() =>
            loadMoreContactusData("contactus", lastDocumentRead, limit)
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
    addContactusData: (dbCollection: any, data: any) =>
      dispatch(addContactusData(dbCollection, data)),
    getContactusData: (dbCollection: any, limit: any) =>
      dispatch(getContactusData(dbCollection, limit)),
    loadMoreContactusData: (
      dbCollection: any,
      lastDocumentRead: any,
      limit: any,
    ) => dispatch(LoadMoreContactusData(dbCollection, lastDocumentRead, limit)),
    deleteContactusData: (dbCollection: any, id: string) =>
      dispatch(deleteContactusData(dbCollection, id)),
    updateContactusData: (dbCollection: any, id: string, updatedData: any) =>
      dispatch(updateContactusData(dbCollection, id, updatedData)),
  };
};

export default connect(null, mapDispatchToProps)(ContactUs);
