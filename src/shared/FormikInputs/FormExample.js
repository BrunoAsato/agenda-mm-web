import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import { FormGroup, Grid, FormControl, FormControlLabel, Switch } from '@material-ui/core';
import { Formik } from 'formik';
import Yup from '~/config/yup';

import CustomModal from '~/shared/CustomModal';
import CurrencyInput from './CurrencyInput';
import MaskedInput from './MaskedInput';
import RadioInput from './RadioInput';
import SelectInput from './SelectInput';
import TextInput from './TextInput';
import SwitchInput from './SwitchInput';
import CheckboxInput from './CheckboxInput';
import FileInput from './FileInput';

const Test = ({ updateValue }) => {
  const [state, setstate] = useState(false);

  const myChange = () => {
    setstate(!state);
    updateValue(`Meu campo agora é ${state}`);
  };

  return (
    <FormControl fullWidth>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={state} onClick={myChange} name="teste" />}
          label="Teste alteração via func"
        />
      </FormGroup>
    </FormControl>
  );
};

const FormikForm = () => {
  const formikConfig = {
    // caso queria pre popular os campos setar aqui
    initialValues: {
      name: 'testes',
      descr: 'testes',
      price: 15000.1,
      age: [20],
      opts: [2, 3],
      active: false,
      gender: 'female',
      phone: '42999987777',
      school: 'Municipal',
      cpf: '00000000000'
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required(),
      school: Yup.string().required(),
      descr: Yup.string().required(),
      gender: Yup.string().required(),
      opts: Yup.array().min(1),
      active: Yup.bool(),
      age: Yup.number()
        .moreThan(5)
        .required(),
      price: Yup.string()
        .required()
        .typeError(),
      phone: Yup.string()
        .required()
        .typeError(),
      cpf: Yup.string()
        .required()
        .typeError()
    }),
    validate: values => {
      // função para fazer validações manuais depois das validaçoes automaticas e antes de fazer o submit
      const errors = {};
      // errors.phone = 'nao e do parana';
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      setSubmitting(false);
    }
  };

  const alteraDado2 = setFieldValue => {
    // buscar endereço com o cep...

    setFieldValue('descr', 'valor alterado pela funcao externa');
  };

  return (
    <Formik {...formikConfig}>
      {formProps => {
        const { values, dirty, isSubmitting, handleChange, handleSubmit, handleReset, setFieldValue } = formProps;
        return (
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Grid container spacing={1}>
                <Test updateValue={v => setFieldValue('name', v)} />
                <Button variant="contained" color="secondary" onClick={() => alteraDado2(setFieldValue)}>
                  Altera dado via func
                </Button>

                <Grid item xs={12}>
                  <TextInput label="Name" name="name" onChange={handleChange} />
                </Grid>

                <Grid item xs={12}>
                  <TextInput label="Escola" name="school" onChange={handleChange} />
                </Grid>

                <Grid item xs={6}>
                  <TextInput label="Descricao" name="descr" multiline onChange={handleChange} />
                </Grid>

                <Grid item xs={6}>
                  <CurrencyInput label="Price" name="price" value={values.price} onChange={handleChange} />
                </Grid>

                <Grid item xs={6}>
                  <MaskedInput label="Phone" name="phone" mask="(99) 9999-9999" onChange={handleChange} />
                </Grid>

                <Grid item xs={6}>
                  <MaskedInput label="CPF" name="cpf" mask="999.999.999-99" onChange={handleChange} />
                </Grid>

                <Grid item xs={12}>
                  <SelectInput
                    label="Age"
                    name="age"
                    onChange={handleChange}
                    multiple
                    firstDisabled={false}
                    options={[
                      { value: 20, label: '20 years' },
                      { value: 30, label: '30 years' },
                      { value: 40, label: '40 years' }
                    ]}
                  />
                </Grid>

                <Grid item xs={6}>
                  <SwitchInput onChange={handleChange} name="active" label="User esta ativo?" switchLabel="Ativo" />
                </Grid>

                <Grid item xs={6}>
                  <FileInput onChange={handleChange} name="file" label="Arquivo?" buttonLabel="Selecione um arquivo" />
                </Grid>

                <Grid item xs={6}>
                  <RadioInput
                    label="Gender"
                    name="gender"
                    value={values.gender}
                    onChange={handleChange}
                    options={[
                      { value: 'male', label: 'Male' },
                      { value: 'female', label: 'Female' },
                      { value: 'other', label: 'Other' }
                    ]}
                  />
                </Grid>

                <Grid item xs={6}>
                  <CheckboxInput
                    label="Opções"
                    name="opts"
                    onChange={handleChange}
                    options={[
                      { value: 1, label: 'Opt 1' },
                      { value: 2, label: 'Opt 2' },
                      { value: 3, label: 'Opt 3' },
                      { value: 4, label: 'Opt 4' }
                    ]}
                  />
                </Grid>
              </Grid>
            </FormGroup>

            <pre>{JSON.stringify(values, null, 2)}</pre>

            <FormFooter handleReset={handleReset} dirty={dirty} isSubmitting={isSubmitting} />
          </form>
        );
      }}
    </Formik>
  );
};

const FormFooter = ({ handleReset, dirty, isSubmitting }) => {
  return (
    <DialogActions>
      <Button type="button" className="outline" onClick={handleReset} disabled={!dirty || isSubmitting}>
        Reset
      </Button>
      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </DialogActions>
  );
};

const FormExample = props => {
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  function handleClickOpen() {
    setOpen(true);
  }

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Form de exemplo Formik
      </Button>

      <CustomModal
        title="Form example"
        opened={open}
        onClose={handleClose}
        fullScreen={false}
        footer={false}
        body={<FormikForm />}
      />
    </>
  );
};

export default FormExample;
