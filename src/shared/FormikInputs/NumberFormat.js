import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, TextField, Box, Typography, FormHelperText } from '@material-ui/core';
import { useField } from 'formik';
import NumberFormat from 'react-number-format';
import InputErrorMessage from './InputErrorMessage';

const CustomNumberFormat = props => {
  const [field, meta, helpers] = useField(props);
  const {
    max,
    min,
    label,
    decimalScale,
    displayType,
    avoidOnValueChange,
    onChange: handleChangeInput,
    onBlur: handleBlurInput,
    helperText,
    showErrorOnTouch
  } = props;

  const inputProps = { ...props };
  delete inputProps.onChange;
  delete inputProps.avoidOnValueChange;
  delete inputProps.helperText;
  delete inputProps.showErrorOnTouch;

  const { setTouched, setValue } = helpers;

  const handleChange = v => {
    let value = v.floatValue;

    if (max || min) {
      if (max && value > max) {
        value = max;
      }

      if (min && value < min) {
        value = min;
      }
    }
    setTouched(true);
    setValue(value);
    if (handleChangeInput && !avoidOnValueChange) handleChangeInput(value);
  };

  const handleOnChange = ev => {
    const { value } = ev.target;
    const numberValue = value.replace('.', '').replace(',', '.');
    if (handleChangeInput && avoidOnValueChange) handleChangeInput(Number(numberValue));
  };

  const handleBlur = e => {
    setTouched(true);
    if (handleBlurInput) handleBlurInput(e.target.name);
  };

  return (
    <>
      {label && displayType === 'text' && (
        <Box>
          <Typography variant="caption" color="initial">
            {label}
          </Typography>
        </Box>
      )}

      <FormControl error={Boolean(meta.error) && Boolean(meta.touched)} fullWidth>
        <NumberFormat
          size="small"
          error={!!meta.error}
          variant="outlined"
          onValueChange={handleChange}
          onChange={handleOnChange}
          onBlur={handleBlur}
          value={field.value}
          customInput={TextField}
          fixedDecimalScale={false}
          decimalScale={decimalScale || 2}
          thousandSeparator="."
          decimalSeparator=","
          {...inputProps}
        />
        {helperText && <FormHelperText component="span">{helperText}</FormHelperText>}
        <InputErrorMessage error={meta.error} touched={meta.touched} showOnTouch={showErrorOnTouch || false} />
      </FormControl>
    </>
  );
};

CustomNumberFormat.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  label: PropTypes.string,
  displayType: PropTypes.string,
  helperText: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  avoidOnValueChange: PropTypes.bool,
  showErrorOnTouch: PropTypes.bool,
  max: PropTypes.number,
  min: PropTypes.number
};

CustomNumberFormat.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  showErrorOnTouch: false,
  avoidOnValueChange: false,
  label: null,
  helperText: null,
  displayType: null,
  max: null,
  min: null
};

export default CustomNumberFormat;
