import React, { useState } from 'react';
import './App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Header from './shared/Header';
import Footer from './shared/Footer';
import ListaContatos from './components/Agenda/ListaContatos';
import FormContato from './components/Agenda/FormContato';
import data from './data';

function App() {
  const [contatos, alterarContato] = useState([...data]);

  return (
    <Container maxWidth="lg">
      <Header />
      <FormContato contatos={contatos} alterarContato={alterarContato} />
      <ListaContatos contatos={contatos} alterarContato={alterarContato} />
      <Box sx={{ my: 4 }}>
        <hr />
        <Footer />
      </Box>
    </Container>
  );
}

export default App;
