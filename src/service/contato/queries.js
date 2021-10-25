import { gql } from '@apollo/client';

const GET_CONTATOS = gql`
  query contatos {
    contatos {
      id
      nome
      telefone
      email
    }
  }
`;

const queries = {
  GET_CONTATOS
};

export default queries;
