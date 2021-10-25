import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Contato = ({ contato, editarContato, excluirContato }) => {
  const [editarRegistro, setEditarRegistro] = useState(false);
  const [NovoContato, setNovoContato] = useState(contato.nome);
  const [NovoTelefone, setNovoTelefone] = useState(contato.telefone);
  const [NovoEmail, setNovoEmail] = useState(contato.email);

  const handleSubmit = e => {
    e.preventDefault();
    editarContato(contato.id, NovoContato, NovoTelefone, NovoEmail);
    setEditarRegistro(false);
  };

  return (
    <li className="listaContato__item">
      <ul>
        {editarRegistro ? (
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <form action="" onSubmit={handleSubmit} className="formContato">
                <input
                  type="text"
                  name=""
                  value={NovoContato}
                  onChange={e => setNovoContato(e.target.value)}
                  className="formContato__input"
                />
                <input
                  type="text"
                  name=""
                  value={NovoTelefone}
                  onChange={e => setNovoTelefone(e.target.value)}
                  className="formContato__input"
                />
                <input
                  type="text"
                  name=""
                  value={NovoEmail}
                  onChange={e => setNovoEmail(e.target.value)}
                  className="formContato__input"
                />
                <Button variant="outlined" type="submit">
                  Atualizar
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {contato.nome}
                </Typography>
                <Typography variant="h5" component="div">
                  {contato.telefone}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <a href="mailto:${contato.email}">{contato.email}</a>
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" onClick={() => setEditarRegistro(true)}>
                  Editar
                </Button>
                <Button variant="outlined" onClick={() => excluirContato(contato.id)}>
                  Deletar
                </Button>
              </CardActions>
            </Card>
          </>
        )}
      </ul>
    </li>
  );
};

export default Contato;
