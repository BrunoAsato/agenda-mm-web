import React from 'react';
import { FormHelperText } from '@material-ui/core';
import PropTypes from 'prop-types';

const InputErrorMessage = ({ error, touched, showOnTouch }) => {
  const showError = (showOnTouch && touched && Boolean(error)) || (!!error && !showOnTouch);
  return <>{showError && <FormHelperText error>{error}</FormHelperText>}</>;
};

InputErrorMessage.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  touched: PropTypes.bool,
  showOnTouch: PropTypes.bool
};

InputErrorMessage.defaultProps = {
  error: false,
  touched: false,
  showOnTouch: false
};

export default InputErrorMessage;
