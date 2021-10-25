import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormControl, TextField, Button, FormLabel, FormHelperText, Box } from '@material-ui/core';
import { useField } from 'formik';
import { toast } from 'react-toastify';
import InputErrorMessage from './InputErrorMessage';

const FileInput = ({ ...inputProps }) => {
  const { onChange, selectedFile } = inputProps;
  const [field, meta, helpers] = useField(inputProps);

  const myHandleChange = e => {
    const file = e.target.files[0];

    if (inputProps.requiredType.length > 0) {
      if (file.type.indexOf(inputProps.requiredType) === -1) {
        toast.error(`O arquivo selecionado não é suportado. Formatos aceitos: ${inputProps.requiredType.join(', ')}`);
        return;
      }
    }
    console.log(file);
    onChange(file);
    helpers.setValue(file);
  };

  return (
    <FormControl fullWidth>
      {inputProps.label && <FormLabel component="legend">{inputProps.label}</FormLabel>}

      <Box>
        <Button variant="contained" color="secondary" component="label">
          {inputProps.buttonLabel}
          <input name={field.name} onChange={myHandleChange} type="file" style={{ display: 'none' }} />
        </Button>
      </Box>

      {selectedFile && (
        <FormHelperText>{`Arquivo selecionado: ${selectedFile.name || 'Nenhum selecionado'}`}</FormHelperText>
      )}

      <InputErrorMessage error={meta.error} touched={meta.touched} />
    </FormControl>
  );
};

FileInput.propTypes = {
  name: PropTypes.string.isRequired,
  requiredType: PropTypes.array,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  multiline: PropTypes.bool
};

FileInput.defaultProps = {
  error: false,
  multiline: false,
  requiredType: []
};

export default FileInput;
