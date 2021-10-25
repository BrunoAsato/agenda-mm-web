import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input, FormControl, InputLabel, FormHelperText, Box, TextField } from '@material-ui/core';
import { useField } from 'formik';
import NumberFormat from 'react-number-format';
import InputErrorMessage from './InputErrorMessage';

const CurrencyInput = inputProps => {
  const [field, meta, helpers] = useField(inputProps);

  return (
    <FormControl error={!!meta.error} fullWidth>
      <NumberFormat
        thousandSeparator
        decimalScale={2}
        value={field.value}
        onValueChange={v => {
          helpers.setValue(v.floatValue);
        }}
        error={!!meta.error}
        fixedDecimalScale
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$"
        size="small"
        variant="outlined"
        label={inputProps.label}
        customInput={TextField}
        disabled={inputProps.disabled}
        allowNegative={inputProps.allowNegative}
        InputLabelProps={{
          shrink: true
        }}
      />

      <InputErrorMessage error={meta.error} touched={meta.touched} />
    </FormControl>
  );
};

CurrencyInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};

export default CurrencyInput;
