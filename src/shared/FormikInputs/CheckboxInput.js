import React from 'react';
import { FormControl, FormControlLabel, Checkbox, FormLabel } from '@material-ui/core';
import { useField } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import InputErrorMessage from './InputErrorMessage';

const CheckboxInput = ({ ...inputProps }) => {
  const [field, meta, helpers] = useField(inputProps);

  const onCheck = (o, index) => {
    const arr = field.value;

    const pos = arr.indexOf(o.value);

    if (pos < 0) {
      arr.push(o.value);
    } else {
      arr.splice(pos, 1);
    }

    helpers.setValue(arr);
  };

  return (
    <FormControl>
      {inputProps.label && <FormLabel component="legend">{inputProps.label}</FormLabel>}
      {inputProps.options.map((o, index) => {
        return (
          <FormControlLabel
            key={uuidv4()}
            disabled={inputProps.disabled}
            control={
              <Checkbox
                checked={field.value.indexOf(o.value) > -1}
                onChange={() => onCheck(o, index)}
                name="checkedB"
                color="secondary"
              />
            }
            label={o.label}
          />
        );
      })}

      <InputErrorMessage error={meta.error} touched={meta.touched} />
    </FormControl>
  );
};

CheckboxInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  disabled: PropTypes.bool
};

export default CheckboxInput;
