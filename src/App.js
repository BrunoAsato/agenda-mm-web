import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import ListaContactos from './components/ListaContactos';
import FormulariosContactos from './components/FormulariosContactos';

function App() {
    const [contactos, cambiarContacto] = useState(
        [
            {
                id:1,
                nombre:'Anthony Serquén',
                telefono: '+51 988719890'

            },

            {
                id:2,
                nombre:'Stephany Serquén',
                telefono: '+51 981895210'

            }
        ]
    )

  return (
      <>
          <Header />
          <FormulariosContactos contactos={contactos} cambiarContacto = {cambiarContacto}/>
          <ListaContactos contactos = {contactos} cambiarContacto = {cambiarContacto}/>
      </>
  );
}

export default App;
