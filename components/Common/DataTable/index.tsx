import {
  Container,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { useState, useEffect } from "react";
import useTable from "./useTable";
import FormWrapperV2 from "@/components/Forms/FormBuilder/FormWrapperV2";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import AnimateDialog from "../Dialog";
import StackLayout from "@/components/Layout/Stack";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import { DataTableProps } from "@/types/dataTable";

function DataTable({
  item,
  addItem,
  dbPath,
  deleteItem,
  headCells,
  updateItem,
  Form,
  DisplayAs,
}: DataTableProps) {
  const [records, setRecords] = useState([]);
  const [filterFn, setFilterFn] = useState({
    fn: (items: any) => {
      return items;
    },
  });

  const isMobile = useMediaQuery("(max-width:600px)") ? true : false;

  useEffect(() => {
    setRecords(item);
  }, [item]);

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);

  const handleSearch = (data) => {
    const { search } = data;
    setFilterFn({
      fn: (items) => {
        if (search === "") return items;
        else
          return items.filter(
            (x: any) =>
              x?.[headCells[0]?.id]
                ?.toLowerCase()
                .includes(search?.toLowerCase()),
          );
      },
    });
  };

  return (
    <Container sx={{ padding: 0 }}>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: isMobile ? "flex-start" : "flex-end",
          alignItems: "flex-end",
          paddingBottom: "16px",
        }}
      >
        <FormWrapperV2
          formRendererProps={{
            formData: [
              {
                name: "search",
                helperText: "filter results",
                type: "input",
                rules: {
                  required: false,
                },
                fieldProps: {
                  label: "Search by Full Name",
                  variant: "outlined",
                },
              },
            ],
          }}
          formFieldDirection="row"
          onSubmit={handleSearch}
        />
        <AnimateDialog
          buttonProps={{
            startIcon: <AddBoxRoundedIcon />,
            children: "Add",
            variant: "outlined",
            size: "medium",
          }}
          dialogContentText={
            <Form
              title="Add Contact form data"
              onSubmit={(data) => {
                delete data?.array;
                console.log(data);
                addItem(dbPath, data);
              }}
              defaultValues={{}}
            />
          }
          key="edit"
        />
      </Toolbar>
      <TblContainer>
        <TblHead />
        <TableBody>
          {recordsAfterPagingAndSorting()?.map((item: any, idx: any) => {
            return (
              <TableRow
                key={idx}
                sx={{
                  cursor: "pointer",
                }}
              >
                {headCells
                  ?.slice(0, headCells?.length - 1)
                  ?.map((cell) => (
                    <TableCell key={cell?.id}>
                      {DisplayAs ? <DisplayAs {...item} /> : item?.[cell?.id]}
                    </TableCell>
                  ))}
                <TableCell sx={{ justifyContent: "left" }}>
                  <StackLayout
                    noOfItems={[
                      <AnimateDialog
                        buttonProps={{
                          startIcon: <DeleteForeverRoundedIcon />,
                          children: isMobile ? "" : "Delete",
                          variant: isMobile ? "text" : "outlined",
                          size: "small",
                          onClick: () => {},
                        }}
                        dialogTitle={`Do you want to delete it ${
                          item[headCells[0]?.id] || ""
                        }?`}
                        actionButton={[
                          {
                            label: "Yes",
                            onClick: () => deleteItem(dbPath, item?.id),
                          },
                        ]}
                        key="delete"
                      />,
                      <AnimateDialog
                        buttonProps={{
                          startIcon: <EditRoundedIcon />,
                          children: isMobile ? "" : "Edit",
                          variant: isMobile ? "text" : "contained",
                          size: "small",
                        }}
                        dialogContentText={
                          <Form
                            title="Update Contact form data"
                            defaultValues={item}
                            onSubmit={(data) => {
                              delete data?.array;
                              console.log(data);
                              updateItem(data, item?.id);
                            }}
                          />
                        }
                        key="edit"
                      />,
                    ]}
                    stackProps={{
                      direction: "row",
                      useFlexGap: true,
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      spacing: 1,
                    }}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </TblContainer>
      <TblPagination />
    </Container>
  );
}

export default DataTable;
