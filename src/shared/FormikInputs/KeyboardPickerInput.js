import React from 'react';
import PropTypes from 'prop-types';

import { KeyboardDatePicker } from '@material-ui/pickers';
import { format } from 'date-fns';
import { FormControl } from '@material-ui/core';
import { useField, Field } from 'formik';
import InputErrorMessage from './InputErrorMessage';

const KeyboardPickerInput = props => {
  const [field, meta, helpers] = useField(props);
  const { name, minDate, maxDate, onChange, format, showErrorOnTouch, disabled } = props;
  const { setTouched, setError, setValue } = helpers;

  const formatDate = date => {
    if (!date) return '';
    return format(date, format);
  };

  const getMessage = (type, date) => {
    try {
      if (!date) return '';
      const dateObj = new Date(date);
      return `A data ${type} é ${formatDate(dateObj)}`;
    } catch (e) {
      return `Data ${type} inválida`;
    }
  };

  const handleChange = date => {
    const value = date || '';
    setValue(value);
    if (onChange) onChange({ target: { name, value } });
    setError(value ? false : 'Data inválida');
  };

  return (
    <FormControl fullWidth>
      <Field
        component={KeyboardDatePicker}
        autoOk
        format={format}
        inputVariant="outlined"
        invalidDateMessage="Data inválida"
        minDateMessage={getMessage('mínima', minDate)}
        maxDateMessage={getMessage('máxima', maxDate)}
        onBlur={() => setTouched({ target: { name } })}
        value={meta.value}
        error={Boolean(meta.error) && Boolean(meta.touched)}
        helperText={Boolean(meta.error) && meta.error}
        onError={error => {
          if (error !== '' && error !== meta.error) setError(error);
        }}
        name={name}
        {...props}
        onChange={date => handleChange(date)}
        disabled={disabled}
      />
    </FormControl>
  );
};

KeyboardPickerInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  minDate: PropTypes.any,
  maxDate: PropTypes.any,
  format: PropTypes.string,
  showErrorOnTouch: PropTypes.bool,
  disabled: PropTypes.bool
};

KeyboardPickerInput.defaultProps = {
  onChange: () => {},
  minDate: new Date('1900-01-01'),
  maxDate: new Date('2100-01-01'),
  format: 'dd/MM/yyyy',
  showErrorOnTouch: false,
  disabled: false
};

export default KeyboardPickerInput;
