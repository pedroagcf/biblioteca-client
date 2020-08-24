import { actionTypes, endpoints } from '../utils/js/constants';
import Axios from 'axios';

export const sendLivroRequest = () => {
  return {
    type: actionTypes.LIVRO_FORM_REQUEST,
  };
};

export const sendLivroSuccess = (transactionDetails) => {
  return {
    type: actionTypes.LIVRO_FORM_SUCCESS,
    payload: transactionDetails,
  };
};

export const sendLivroError = (error) => {
  return {
    type: actionTypes.LIVRO_FORM_ERROR,
    payload: error,
  };
};
export const updateLivroRequest = () => {
  return {
    type: actionTypes.LIVRO_UPDATE_REQUEST,
  };
};

export const updateLivroSuccess = (livro) => {
  return {
    type: actionTypes.LIVRO_UPDATE_SUCCESS,
    payload: livro,
  };
};

export const updateLivroError = (error) => {
  return {
    type: actionTypes.LIVRO_UPDATE_ERROR,
    payload: error,
  };
};

export const fetchlivrosSuccess = (transactionDetails) => {
  return {
    type: actionTypes.FETCH_LIVROS_SUCCESS,
    payload: transactionDetails,
  };
};

const sendLivro = (value) => {
  console.log('livro form action');

  const requestBody = {
    titulo: value.titulo,
    anoLancamento: value.anoLancamento,
    autor: {
      id: value.autor,
    },
    genero: {
      id: value.genero,
    },
    editora: {
      id: value.editora,
    },
  };

  return (dispatch) => {
    dispatch(sendLivroRequest());
    Axios.post(endpoints.LIVROS, requestBody)
      .then((res) => {
        dispatch(sendLivroSuccess(res.data));
      })
      .then(() => {
        Axios.get(endpoints.LIVROS).then((res) => {
          dispatch(fetchlivrosSuccess(res.data));
        });
      })
      .catch((error) => {
        dispatch(sendLivroError(error.message));
      });
  };
};

export const updateLivro = (livroId, value) => {
  console.log('update livro');

  const requestBody = {
    titulo: value.titulo,
  };

  Axios.put(`${endpoints.LIVROS}/${livroId}`, requestBody)
    .then((res) => {
      document.location.reload(true);
    })
    .then(() => {
      Axios.get(endpoints.LIVROS).then((res) => {});
    });
};

export default sendLivro;
