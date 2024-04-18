import React, { useState } from "react";
import { TextField, Button, MenuItem } from "@mui/material";

interface DropdownData {
  componentName: string;
  id: string;
}

const FormComponent: React.FC = () => {
  const [componentData, setComponentData] = useState<DropdownData[]>([
    { componentName: "", id: "" },
  ]);

  const handleDropdownChange = (index: number, e: any) => {
    const newDropdowns = [...componentData];
    newDropdowns[index][e.target.name] = e.target.value;
    setComponentData(newDropdowns);
  };

  const handleAddDropdown = () => {
    setComponentData([...componentData, { componentName: "", id: "" }]);
  };

  const handleRemoveDropdown = (index: number) => {
    const newComponentData = [...componentData];
    newComponentData.splice(index, 1);
    setComponentData(newComponentData);
  };

  const handleSubmit = () => {
    const fieldEmpty =
      componentData.filter(
        (data) => data.componentName === "" || data.id === "",
      )?.length > 0;
    if (!fieldEmpty) {
    }
  };

  const options = [
    { value: "heroBanner", label: "Hero Banner" },
    { value: "sectionTitle", label: "Section Title" },
    { value: "features", label: "Feature List" },
  ];

  return (
    <div>
      {componentData.map((component, index) => (
        <div key={index}>
          <TextField
            select
            name="componentName"
            label="Component Name"
            value={component.componentName}
            onChange={(e) => handleDropdownChange(index, e)}
            fullWidth
            variant="outlined"
          >
            {/* Add your component options here */}
            {options?.map((option) => (
              <MenuItem value={option.value} key={option.value}>
                {option?.label}
              </MenuItem>
            ))}
          </TextField>
          {componentData[index].componentName}

          <TextField
            select
            name="id"
            label="Id"
            value={component.id}
            onChange={(e) => handleDropdownChange(index, e)}
            fullWidth
            variant="outlined"
          >
            {/* Add your component options here */}
            <MenuItem value="Option 1">Option 1</MenuItem>
            <MenuItem value="Option 2">Option 2</MenuItem>
            <MenuItem value="Option 3">Option 3</MenuItem>
          </TextField>
          <Button onClick={() => handleRemoveDropdown(index)}>Remove</Button>
        </div>
      ))}
      <Button onClick={handleAddDropdown}>Add Dropdown</Button>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default FormComponent;
