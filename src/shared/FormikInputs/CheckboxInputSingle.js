import React from 'react';
import { FormControl, Checkbox, FormControlLabel } from '@material-ui/core';
import { useField, Field } from 'formik';
import InputErrorMessage from './InputErrorMessage';

const CheckboxInputSingle = ({ ...inputProps }) => {
  const [field, meta] = useField(inputProps);

  const { onChange, label } = inputProps;

  return (
    <FormControl>
      <FormControlLabel
        value="end"
        control={
          <Field
            as={Checkbox}
            checked={field.value}
            onChange={onChange}
            name={meta.name}
            color="secondary"
            {...inputProps}
          />
        }
        label={label}
        labelPlacement="end"
      />
      <InputErrorMessage error={meta.error} touched={meta.touched} />
    </FormControl>
  );
};

CheckboxInputSingle.propTypes = {};

export default CheckboxInputSingle;
