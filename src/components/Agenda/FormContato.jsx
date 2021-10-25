import React, { useState } from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const FormContato = ({ contatos, alterarContato }) => {
  const [inputNome, setInputNome] = useState('');
  const [inputTelefone, setInputTelefone] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alterarContato([
      ...contatos,
      {
        id: 3,
        nome: inputNome,
        telefone: inputTelefone,
        email: inputEmail
      }
    ]);

    setInputNome('');
    setInputTelefone('');
    setInputEmail('');
  };

  return (
    <form action="" onSubmit={handleSubmit} className="formContato">
      <input
        type="text"
        placeholder="Nome"
        value={inputNome}
        onChange={e => setInputNome(e.target.value)}
        className="formContato__input"
      />
      <input
        type="tel"
        placeholder="Telefone"
        value={inputTelefone}
        pattern="[0-9]{8}*"
        onChange={e => setInputTelefone(e.target.value)}
        className="formContato__input"
      />
      <input
        type="email"
        placeholder="E-mail"
        value={inputEmail}
        onChange={e => setInputEmail(e.target.value)}
        className="formContato__input"
      />
      <Button variant="contained" type="submit" className="formContato__submit">
        Adicionar
      </Button>
    </form>
  );
};

FormContato.propTypes = {
  contatos: PropTypes.object.isRequired
};

export default FormContato;
