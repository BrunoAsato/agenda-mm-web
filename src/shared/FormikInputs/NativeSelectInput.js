import React, { Children } from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  OutlinedInput,
  NativeSelect,
  makeStyles,
  Grid
} from '@material-ui/core';
import { useField } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import InputErrorMessage from './InputErrorMessage';
import theme from '~/config/theme';

const useStyles = makeStyles({
  input: {
    background: '#fff',
    border: 2,
    borderStyle: 'solid',
    borderRadius: 4,
    borderColor: '#ccc',
    color: theme.palette.text.primary,
    height: 39,
    width: '100%',
    fontSize: 15,
    padding: '0 10px'
  },
  label: {
    background: '#fff',
    padding: '0px 3px'
  }
});

const NativeSelectInput = ({ ...inputProps }) => {
  const [field, meta, helpers] = useField(inputProps);
  const { onChange, onBlur, label, disabled, multiple, options, helperText, className, id, children } = inputProps;
  const labelId = uuidv4();
  const classes = useStyles();

  const myHandleChange = e => {
    const value = e && e.target && e.target.value ? JSON.parse(e.target.value) : '';
    helpers.setValue(value);
    if (onChange) onChange(value);
  };

  const myHandleBlur = e => {
    const value = e && e.target && e.target.value ? JSON.parse(e.target.value) : '';
    helpers.setTouched(value);
    if (onBlur) onBlur(value);
  };

  const checkValue = o => {
    if (typeof field.value !== 'string') {
      return JSON.stringify(o.value) == JSON.stringify(field.value);
    } else {
      return field.value == o.value;
    }
  };

  return (
    <FormControl fullWidth variant="outlined" size="small" error={!!meta.error} className={className}>
      <InputLabel className={classes.label} shrink htmlFor={labelId}>
        {label}
      </InputLabel>

      <Grid container spacing={2}>
        <Grid item xs={children ? 11 : 12}>
          <select
            name={meta.name}
            id={id}
            onChange={myHandleChange}
            onBlur={myHandleBlur}
            disabled={disabled}
            multiple={multiple}
            className={classes.input}
          >
            <option className={classes.input} selected={!field.value} value="">
              -- selecione --
            </option>
            {options.map(o => (
              <option selected={checkValue(o)} value={JSON.stringify(o.value)}>
                {o.label}
              </option>
            ))}
          </select>
        </Grid>

        {!!children && (
          <Grid item xs={1}>
            {children}
          </Grid>
        )}
      </Grid>

      {helperText && <span>{helperText}</span>}
      <InputErrorMessage error={meta.error} touched={meta.touched} />
    </FormControl>
  );
};

NativeSelectInput.propTypes = {
  className: PropTypes.string,
  renderValue: PropTypes.func,
  label: PropTypes.string,
  helperText: PropTypes.string,
  options: PropTypes.array.isRequired,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool
};

NativeSelectInput.defaultProps = {
  multiple: false,
  className: '',
  renderValue: null,
  label: '',
  disabled: false,
  helperText: ''
};

export default NativeSelectInput;
