import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, Switch, FormControlLabel, FormLabel, FormGroup, Typography, Box } from '@material-ui/core';
import { useField } from 'formik';

const SwitchInput = ({ ...inputProps }) => {
  const [field, meta, helpers] = useField(inputProps);

  const myHandleChange = () => {
    helpers.setValue(!field.value);
  };

  return (
    <FormControl fullWidth>
      {inputProps.label && (
        <FormLabel
          component={() => (
            <Typography variant="caption" style={{ color: '#78849E' }}>
              {inputProps.label}
            </Typography>
          )}
        />
      )}

      <Switch
        size="small"
        checked={field.value}
        disabled={inputProps.disabled}
        onChange={myHandleChange}
        name={field.name}
      />
    </FormControl>
  );
};

SwitchInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};

export default SwitchInput;
