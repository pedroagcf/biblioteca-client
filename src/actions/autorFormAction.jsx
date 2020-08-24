import { actionTypes, endpoints } from '../utils/js/constants';
import Axios from 'axios';

export const sendAutorRequest = () => {
  return {
    type: actionTypes.AUTOR_FORM_REQUEST,
  };
};

export const sendAutorSuccess = (transactionDetails) => {
  return {
    type: actionTypes.AUTOR_FORM_SUCCESS,
    payload: transactionDetails,
  };
};

export const sendAutorError = (error) => {
  return {
    type: actionTypes.AUTOR_FORM_ERROR,
    payload: error,
  };
};

export const fetchAutoresSuccess = (transactionDetails) => {
  return {
    type: actionTypes.FETCH_AUTORS_SUCCESS,
    payload: transactionDetails,
  };
};

const sendAutor = (value) => {
  return (dispatch) => {
    dispatch(sendAutorRequest());
    Axios.post(endpoints.AUTORS, value)
      .then((res) => {
        dispatch(sendAutorSuccess(res.data));
      })
      .then(() => {
        Axios.get(endpoints.AUTORS).then((res) => {
          dispatch(fetchAutoresSuccess(res.data));
        });
      })
      .catch((error) => {
        dispatch(sendAutorError(error.message));
      });
  };
};

export default sendAutor;
