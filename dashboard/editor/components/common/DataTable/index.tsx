import {
  Container,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import useTable from "./useTable";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import AnimateDialog from "../Dialog";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import { DataTableProps } from "@/types/dataTable";
import useScreenSize from "@/utils/mediaQuery";
import FormWrapperV2 from "../FormBuilder/FormWrapperV2";
import StackLayout from "../Layout/Stack";

function DataTable({
  item,
  tableHeading,
  addItem,
  dbPath,
  deleteItem,
  headCells,
  updateItem,
  Form,
  appendJson,
  formJsonData,
  storeValueAs,
  formData,
  DisplayAs,
}: DataTableProps) {
  const [records, setRecords] = useState([]);
  const [filterFn, setFilterFn] = useState({
    fn: (items: any) => {
      return items;
    },
  });

  const size = useScreenSize();

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
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          // alignItems: "flex-start",
        }}
      >
        <Container disableGutters>
          <Typography variant="h5" sx={{ fontWeight: 400 }}>
            {tableHeading}
          </Typography>
        </Container>
        <Container
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: size === ("sm" || "md") ? "flex-start" : "flex-end",
            // justifyContent: "flex-start",
            paddingBottom: "16px",
          }}
        >
          <FormWrapperV2
            formRendererProps={{
              formData: [
                {
                  name: "search",
                  helperText: "filter results by first column",
                  type: "input",
                  rules: {
                    required: false,
                  },
                  fieldProps: {
                    label: `Search by ${
                      headCells?.length > 0
                        ? headCells[0]?.label
                        : "first colum"
                    }`,
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
                title="Add data"
                onSubmit={(data) => {
                  delete data?.array;
                  addItem(dbPath, data);
                }}
                appendJson={appendJson}
                formJsonData={formJsonData}
                formData={formData}
                storeValueAs={storeValueAs}
                defaultValues={{}}
              />
            }
            key="edit"
          />
        </Container>
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
                          children: size === "sm" ? "" : "Delete",
                          variant: size === "sm" ? "text" : "outlined",
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
                          children: size === "sm" ? "" : "Edit",
                          variant: size === "sm" ? "text" : "contained",
                          size: "small",
                        }}
                        dialogContentText={
                          <Form
                            title="Update data"
                            defaultValues={item}
                            appendJson={appendJson}
                            formJsonData={formJsonData}
                            storeValueAs={storeValueAs}
                            formData={formData}
                            onSubmit={(data) => {
                              delete data?.array;
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
