import {
  TextField,
  Switch,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  Chip,
  ToggleButtonGroup,
  ToggleButton,
  InputLabel,
  Tooltip,
  Slider,
  Box,
} from "@mui/material";
import MaterialUIICon from "../components/Icon";

export const SpacedInput = ({ type, ...props }) => {
  switch (type) {
    case "boolean":
      return (
        <FormControlLabel control={<Switch />} label={props.label} {...props} />
      );
    case "number":
      return <TextField type="number" {...props} />;
    case "text":
      return <TextField type="text" {...props} />;
    case "color":
      return <TextField type="color" {...props} />;
    case "switch":
      return <Switch {...props} />;
    case "select":
      return (
        <Select {...props}>
          {props.options.map((option, index) => (
            <MenuItem key={index} value={option?.value}>
              {option?.label}
            </MenuItem>
          ))}
        </Select>
      );
    case "slider":
      return (
        <>
          <Slider valueLabelDisplay="auto" {...props} />
        </>
      );
    case "togglebutton":
      return (
        <>
          <InputLabel id="demo-simple-togglebutton-label" sx={{ pb: 1 }}>
            {props?.label}
          </InputLabel>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 0.5,
            }}
          >
            {props.options.map((option, index) => (
              <ToggleButtonGroup {...props} key={index}>
                <Tooltip
                  title={option?.label || option?.icon}
                  arrow
                  key={index}
                >
                  <ToggleButton
                    value={option?.value}
                    aria-label={option?.value}
                    key={index}
                  >
                    {option?.label || <MaterialUIICon name={option?.icon} />}
                  </ToggleButton>
                </Tooltip>
              </ToggleButtonGroup>
            ))}
          </Box>
        </>
      );
    case "object":
      // Example for object input (you might need to customize this)
      return Object.keys(props.value).map((key) => (
        <TextField
          key={key}
          label={key}
          value={props.value[key]}
          onChange={(e) => props.onChange({ [key]: e.target.value })}
        />
      ));
    default:
      return <TextField {...props} />;
  }
};

// Usage examples
{
  /* <SpacedInput type="boolean" label="Toggle" />;
<SpacedInput type="number" label="Number" />;
<SpacedInput type="array" label="Array" multiple options={['Option 1', 'Option 2', 'Option 3']} />;
<SpacedInput type="object" value={{ prop1: 'Value 1', prop2: 'Value 2' }} onChange={handleChange} />; */
}
