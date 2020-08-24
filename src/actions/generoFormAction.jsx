import { actionTypes, endpoints } from '../utils/js/constants';
import Axios from 'axios';

export const sendGeneroRequest = () => {
  return {
    type: actionTypes.GENERO_FORM_REQUEST,
  };
};

export const sendGeneroSuccess = (transactionDetails) => {
  return {
    type: actionTypes.GENERO_FORM_SUCCESS,
    payload: transactionDetails,
  };
};

export const sendGeneroError = (error) => {
  return {
    type: actionTypes.GENERO_FORM_ERROR,
    payload: error,
  };
};

export const fetchGenerosSuccess = (transactionDetails) => {
  return {
    type: actionTypes.FETCH_GENEROS_SUCCESS,
    payload: transactionDetails,
  };
};

const sendGenero = (value) => {
  return (dispatch) => {
    dispatch(sendGeneroRequest());
    Axios.post(endpoints.GENEROS_LITERARIOS, value)
      .then((res) => {
        dispatch(sendGeneroSuccess(res.data));
      })
      .then(() => {
        Axios.get(endpoints.GENEROS_LITERARIOS).then((res) => {
          dispatch(fetchGenerosSuccess(res.data));
        });
      })
      .catch((error) => {
        dispatch(sendGeneroError(error.message));
      });
  };
};

export default sendGenero;
