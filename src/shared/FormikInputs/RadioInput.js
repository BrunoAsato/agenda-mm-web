import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { useField } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import InputErrorMessage from './InputErrorMessage';

const RadioInput = ({ ...inputProps }) => {
  const { showErrorOnTouch, size } = inputProps;
  const [field, meta, helpers] = useField(inputProps);

  return (
    <FormControl size={size} error={!!meta.error && !!meta.touched}>
      <FormLabel component="legend">{inputProps.label}</FormLabel>
      <RadioGroup row={inputProps.row} name={field.name} value={field.value} onChange={inputProps.onChange}>
        {inputProps.options.map(o => {
          return (
            <FormControlLabel
              key={uuidv4()}
              value={o.value}
              disabled={inputProps.disabled}
              control={<Radio size={size} />}
              label={o.label}
            />
          );
        })}
      </RadioGroup>
      <InputErrorMessage error={meta.error} touched={meta.touched} showOnTouch={showErrorOnTouch || false} />
    </FormControl>
  );
};

RadioInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  showErrorOnTouch: PropTypes.bool,
  options: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
  row: PropTypes.bool
};

RadioInput.defaultProps = {
  showErrorOnTouch: false
};

export default RadioInput;
