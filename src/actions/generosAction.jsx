import { actionTypes, endpoints } from '../utils/js/constants';
import Axios from 'axios';

export const fetchGenerosRequest = () => {
  return {
    type: actionTypes.FETCH_GENEROS_REQUEST,
  };
};

export const fetchGenerosSuccess = (transactionDetails) => {
  return {
    type: actionTypes.FETCH_GENEROS_SUCCESS,
    payload: transactionDetails,
  };
};

export const fetchGenerosError = (error) => {
  return {
    type: actionTypes.FETCH_GENEROS_ERROR,
    payload: error,
  };
};

const fetchGeneros = () => {
  return (dispatch) => {
    dispatch(fetchGenerosRequest());
    Axios.get(endpoints.GENEROS_LITERARIOS)
      .then((res) => {
        dispatch(fetchGenerosSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchGenerosError(error.message));
      });
  };
};

export default fetchGeneros;
