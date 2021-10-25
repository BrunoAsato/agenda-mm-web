import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, Select, InputLabel, MenuItem, ListSubheader, Typography } from '@material-ui/core';
import { useField } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import InputErrorMessage from './InputErrorMessage';

const GroupedSelectInput = ({ ...inputProps }) => {
  const [field, meta, helpers] = useField(inputProps);
  const labelId = uuidv4();

  const myHandleChange = e => {
    if (e.target && e.target.value) {
      helpers.setValue(e.target.value);
      if (inputProps.onChange) inputProps.onChange(e.target.value);
    }
  };

  return (
    <FormControl fullWidth variant="outlined" size="small" error={meta.error}>
      {inputProps.label && (
        <InputLabel shrink htmlFor={labelId}>
          {inputProps.label}
        </InputLabel>
      )}

      <Select
        native
        label={inputProps.label}
        labelId={labelId}
        disabled={inputProps.disabled}
        fullWidth
        name={meta.name}
        onChange={myHandleChange}
        multiple={inputProps.multiple}
        value={field.value}
      >
        <option aria-label="none" value="" />
        {inputProps.options.map(o => (
          <optgroup label={o.groupName} key={uuidv4()}>
            {o.options.map(o => (
              <option value={o.value} key={o.value}>
                {o.label}
              </option>
            ))}
          </optgroup>
        ))}
      </Select>

      {/* exemplo dos dados que devem vir no options

          [
            {
              "groupName": "sua label",
              "options": [
                {
                  "label": "label option",
                  "value": "3d4071a3-9120-4e4a-8f1a-9ac6c8461386"
                }
              ]
            },
            {
              "groupName": "Colhedora",
              "options": [
                {
                  "label": "label option",
                  "value": "3d4071a3-9120-4e4a-8f1a-9ac6c8461386"
                }
                {
                  "label": "label option",
                  "value": "3d4071a3-9120-4e4a-8f1a-9ac6c8461386"
                }
              ]
            },
      
      */}

      <InputErrorMessage error={meta.error} touched={meta.touched} />
    </FormControl>
  );
};

GroupedSelectInput.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  multiple: PropTypes.bool,
  firstDisabled: PropTypes.bool,
  disabled: PropTypes.bool
};

GroupedSelectInput.defaultProps = {
  firstDisabled: false,
  multiple: false
};

export default GroupedSelectInput;
