import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, TextField } from '@material-ui/core';
import { useField, FastField } from 'formik';
import InputErrorMessage from './InputErrorMessage';

const TextInputFast = ({ ...inputProps }) => {
  const { showErrorOnTouch } = inputProps;
  const [field, meta, helpers] = useField(inputProps);

  return (
    <FormControl fullWidth>
      <FastField
        as={TextField}
        size="small"
        disabled={inputProps.disabled}
        variant="outlined"
        fullWidth
        {...inputProps}
        multiline={inputProps.multiline}
        value={meta.value}
        onBlur={inputProps.onBlur}
        error={!!meta.error && !!meta.touched}
        InputLabelProps={{ shrink: true }}
      />
      <InputErrorMessage error={meta.error} touched={meta.touched} showOnTouch={showErrorOnTouch || false} />
    </FormControl>
  );
};

TextInputFast.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  multiline: PropTypes.bool,
  showErrorOnTouch: PropTypes.bool,
  disabled: PropTypes.bool,
  onBlur: PropTypes.func
};

TextInputFast.defaultProps = {
  multiline: false,
  showErrorOnTouch: false
};

export default TextInputFast;
