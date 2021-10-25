import React, { useState } from 'react';
import { FormControl, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import InputMask from 'react-input-mask';
import InputErrorMessage from './InputErrorMessage';

const MaskedInput = ({ ...inputProps }) => {
  const { maskPlaceholder, disabled, label, mask, onBlur } = inputProps;
  const [field, meta, helpers] = useField(inputProps);

  const myChange = e => {
    if (e.target.value) {
      helpers.setValue(e.target.value.replace(/\(|\)|\.|\/|\s|-/gm, ''));
    } else {
      helpers.setValue('');
    }
  };

  const myBlur = e => {
    if (e.target.value) {
      const value = e.target.value.replace(/\(|\)|\.|\/|\s|-/gm, '');
      helpers.setValue(value);

      if (onBlur) {
        onBlur(value);
      }
    }
  };

  return (
    <FormControl fullWidth error={!!meta.error}>
      <InputMask
        {...inputProps}
        mask={mask}
        onChange={myChange}
        onBlur={myBlur}
        value={field.value.toString()}
        maskPlaceholder={maskPlaceholder || ''}
      >
        <TextField
          error={!!meta.error}
          size="small"
          validate={e => field.validate(e)}
          label={inputProps.label}
          variant="outlined"
          fullWidth
          label={label}
          error={meta.error && meta.touched}
        />
      </InputMask>
      <InputErrorMessage error={meta.error} touched={meta.touched} />
    </FormControl>
  );
};

MaskedInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  mask: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onBlur: PropTypes.func,
  alwaysShowMask: PropTypes.bool
};

export default MaskedInput;
