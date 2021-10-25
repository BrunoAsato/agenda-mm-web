import React from 'react';
import PropTypes from 'prop-types';
import Contato from './Contato';

const ListaContatos = ({ contatos, alterarContato }) => {
  const editarContato = (id, NovoContato, NovoTelefone, NovoEmail) => {
    alterarContato(
      contatos.map(contato => {
        if (contato.id === id) {
          return { ...contato, nome: NovoContato, telefone: NovoTelefone, email: NovoEmail };
        }
        return contato;
      })
    );
  };

  const excluirContato = id => {
    alterarContato(
      contatos.filter(contato => {
        return contato.id !== id;
      })
    );
  };

  return (
    <ul className="ListaContato">
      {contatos.length > 0 ? (
        contatos.map(contato => {
          return (
            <Contato key={contato.id} contato={contato} editarContato={editarContato} excluirContato={excluirContato} />
          );
        })
      ) : (
        <div>Não há contatos cadastrados no momento</div>
      )}
    </ul>
  );
};

ListaContatos.propTypes = {
  contatos: PropTypes.object.isRequired,
  alterarContato: PropTypes.func.isRequired
};

export default ListaContatos;
