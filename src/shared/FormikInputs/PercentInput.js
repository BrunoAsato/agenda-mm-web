import React, { useState } from 'react';
import { FormControl, InputLabel, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import NumberFormat from 'react-number-format';
import InputErrorMessage from './InputErrorMessage';

const PercentInput = ({ ...inputProps }) => {
  const [field, meta, helpers] = useField(inputProps);

  const handleBlur = e => {
    let v = '';
    if (e.target && e.target.value) {
      v = e.target.value.match(/\d+/gm).join();
    }
    if (inputProps.onBlur) inputProps.onBlur(v);
  };

  const handleChange = v => {
    let value = v.floatValue;

    if (inputProps.max || inputProps.min) {
      if ((inputProps.max || inputProps.max === 0) && value > inputProps.max) {
        value = inputProps.max;
      }

      if ((inputProps.min || inputProps.min === 0) && value < inputProps.min) {
        value = inputProps.min;
      }
    }

    helpers.setValue(value);
    if (inputProps.onChange) inputProps.onChange(value);
  };

  return (
    <FormControl fullWidth error={meta.error || false}>
      <NumberFormat
        size="small"
        variant="outlined"
        label={inputProps.label}
        thousandSeparator
        decimalScale={inputProps.decimalScale === 0 ? 0 : inputProps.decimalScale || 3}
        value={field.value}
        onBlur={handleBlur}
        onValueChange={handleChange}
        fixedDecimalScale
        thousandSeparator="."
        decimalSeparator=","
        suffix="%"
        customInput={TextField}
        error={meta.error}
        allowNegative={inputProps.allowNegative}
        InputLabelProps={{ shrink: true }}
      />

      <InputErrorMessage error={meta.error} touched={meta.touched} />
    </FormControl>
  );
};

PercentInput.propTypes = {
  name: PropTypes.string.isRequired,
  decimalScale: PropTypes.number,
  label: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  disabled: PropTypes.bool,
  onBlur: PropTypes.func
};

export default PercentInput;
