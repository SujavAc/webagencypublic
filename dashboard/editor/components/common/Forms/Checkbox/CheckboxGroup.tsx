import React from "react";
import PropTypes from "prop-types";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import { useWatch, useController, Controller } from "react-hook-form";

const CheckboxGroup = ({
  config = { label: "label", value: "value" },
  control,
  label,
  name,
  rules,
  fieldProps,
  ...rest
}) => {
  const {
    field: { ref, value, onChange, ...inputProps },
    formState: { errors },
  } = useController({
    name,
    control,
  });

  const checkboxIds = useWatch({ control, name: name }) || [];

  const handleChange = (value) => {
    const newArray = [...checkboxIds];
    const item = value;

    //Ensure array isnt empty
    if (newArray.length > 0) {
      //Attempt to find an item in array with matching id
      const index = newArray.findIndex((x) => x === item);

      // If theres no match add item to the array
      if (index === -1) {
        newArray.push(item);
      } else {
        //If there is a match and the value is empty, remove the item from the array
        newArray.splice(index, 1);
      }
    } else {
      //If the array is empty, add the item to the array
      newArray.push(item);
    }

    //Overwrite existing array with newArray}
    onChange(newArray);
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={() => (
        <FormControl className={fieldProps?.className} error={!!errors?.[name]}>
          <FormLabel component="legend">{fieldProps?.label}</FormLabel>
          <FormGroup row={fieldProps?.row}>
            {fieldProps?.options.map((option) => (
              <FormControlLabel
                key={option[config.value]}
                disabled={rules?.required ? false : fieldProps.disabled}
                control={
                  <Checkbox
                    checked={
                      value &&
                      value?.some((checked) => checked === option[config.value])
                    }
                    {...inputProps}
                    inputRef={ref}
                    onChange={() => handleChange(option[config.value])}
                    disabled={rules?.required ? false : rest?.disabled}
                  />
                }
                label={<p className="body2">{option[config.label]}</p>}
              />
            ))}
          </FormGroup>
          <FormHelperText variant="outlined">{rest.helperText}</FormHelperText>
        </FormControl>
      )}
    />
  );
};

CheckboxGroup.propTypes = {
  control: PropTypes.object.isRequired,
  label: PropTypes.string,
  labelPlacement: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  row: PropTypes.bool,
  config: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
};

export default CheckboxGroup;
