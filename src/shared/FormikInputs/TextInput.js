import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, TextField } from '@material-ui/core';
import { useField, Field } from 'formik';
import InputErrorMessage from './InputErrorMessage';

const TextInput = ({ ...inputProps }) => {
  const { showErrorOnTouch } = inputProps;
  const [field, meta, helpers] = useField(inputProps);

  return (
    <FormControl fullWidth>
      <Field
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

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  multiline: PropTypes.bool,
  showErrorOnTouch: PropTypes.bool,
  disabled: PropTypes.bool,
  onBlur: PropTypes.func
};

TextInput.defaultProps = {
  multiline: false,
  showErrorOnTouch: false
};

export default TextInput;
