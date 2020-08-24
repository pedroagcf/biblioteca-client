import { actionTypes, endpoints } from '../utils/js/constants';
import Axios from 'axios';

export const deleteLivroRequest = () => {
  return {
    type: actionTypes.FETCH_LIVRO_ITEM_REQUEST,
  };
};

export const deleteLivroSuccess = (id) => {
  return {
    type: actionTypes.FETCH_LIVROS_DELETE,
    payload: { id },
  };
};

export const deleteLivroError = (error) => {
  return {
    type: actionTypes.FETCH_LIVRO_ITEM_ERROR,
    payload: error,
  };
};

const deleteLivro = (id) => {
  console.log('delete livro');

  return (dispatch) => {
    dispatch(deleteLivroRequest());
    Axios.delete(`${endpoints.LIVROS}/${id}`)
      .then((res) => {
        dispatch(deleteLivroSuccess(id));
        // dispatch(deleteAutorAction(id));
      })
      .catch((error) => {
        dispatch(deleteLivroError(error.message));
      });
  };
};

export default deleteLivro;
