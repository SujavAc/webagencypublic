// Dashboard.js
import React, { useState } from "react";
import {
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const PageList = (props) => {
  // Sample data array for demonstration
  console.log(props);
  const [data, setData] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  // State for tracking the new item being added
  const [newItem, setNewItem] = useState("");

  // Function to add a new item to the list
  const addItem = () => {
    if (newItem.trim() !== "") {
      const newData = [...data, { id: data.length + 1, name: newItem }];
      setData(newData);
      setNewItem("");
    }
  };

  // Function to delete an item from the list
  const deleteItem = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  return (
    <div>
      <TextField
        label="New Item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={addItem}>
        Add
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PageList;
