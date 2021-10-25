import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, Select, InputLabel, MenuItem, OutlinedInput } from '@material-ui/core';
import { useField } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import InputErrorMessage from './InputErrorMessage';

const SelectInput = ({ ...inputProps }) => {
  const [field, meta, helpers] = useField(inputProps);
  const {
    onChange,
    onBlur,
    label,
    disabled,
    multiple,
    customAction,
    options,
    helperText,
    variant,
    className,
    firstDisabled,
    renderValue
  } = inputProps;
  const labelId = uuidv4();

  const myHandleChange = e => {
    helpers.setValue(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  const myHandleBlur = e => {
    helpers.setTouched(e.target.name);
    if (onBlur) onBlur(e.target.name);
  };

  return (
    <FormControl fullWidth variant="outlined" size="small" error={!!meta.error} className={className}>
      <InputLabel shrink htmlFor={labelId}>
        {label}
      </InputLabel>
      <Select
        input={<OutlinedInput name={meta.name} label={label} id={labelId} />}
        label={label}
        labelId={labelId}
        disabled={disabled}
        fullWidth
        name={meta.name}
        onChange={myHandleChange}
        onBlur={myHandleBlur}
        multiple={multiple}
        value={field.value}
        variant={variant}
        renderValue={renderValue}
        InputLabelProps={{ shrink: true }}
      >
        {inputProps.children && (
          <MenuItem disabled={firstDisabled} key={uuidv4()}>
            {inputProps.children}
          </MenuItem>
        )}
        {options.map(o => {
          return (
            <MenuItem
              key={uuidv4()}
              value={o.value}
              style={{
                fontWeight:
                  field.value &&
                  (field.value === o.value || (Array.isArray(field.value) && field.value.indexOf(o.value) > -1))
                    ? 'bold'
                    : 'normal'
              }}
            >
              {o.label}
            </MenuItem>
          );
        })}
      </Select>
      {helperText && <span>{helperText}</span>}
      <InputErrorMessage error={meta.error} touched={meta.touched} />
    </FormControl>
  );
};

SelectInput.propTypes = {
  className: PropTypes.string,
  renderValue: PropTypes.func,
  label: PropTypes.string,
  helperText: PropTypes.string,
  options: PropTypes.array.isRequired,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  firstDisabled: PropTypes.bool
};

SelectInput.defaultProps = {
  multiple: false,
  className: '',
  renderValue: null,
  label: '',
  disabled: false,
  helperText: '',
  firstDisabled: false
};

export default SelectInput;
