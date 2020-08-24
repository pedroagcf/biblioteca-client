import { actionTypes, endpoints } from '../utils/js/constants';
import Axios from 'axios';

export const fetchlivrosRequest = () => {
  return {
    type: actionTypes.FETCH_LIVROS_REQUEST,
  };
};

export const fetchlivrosSuccess = (transactionDetails) => {
  return {
    type: actionTypes.FETCH_LIVROS_SUCCESS,
    payload: transactionDetails,
  };
};

export const fetchlivrosError = (error) => {
  return {
    type: actionTypes.FETCH_LIVROS_ERROR,
    payload: error,
  };
};

const fetchLivros = () => {
  return (dispatch) => {
    dispatch(fetchlivrosRequest());
    Axios.get(endpoints.LIVROS)
      .then((res) => {
        dispatch(fetchlivrosSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchlivrosError(error.message));
      });
  };
};

export default fetchLivros;
