import { actionTypes, endpoints } from '../utils/js/constants';
import Axios from 'axios';

export const fetchAutoresRequest = () => {
  return {
    type: actionTypes.FETCH_AUTORS_REQUEST,
  };
};

export const fetchAutoresSuccess = (transactionDetails) => {
  return {
    type: actionTypes.FETCH_AUTORS_SUCCESS,
    payload: transactionDetails,
  };
};

export const fetchAutoresError = (error) => {
  return {
    type: actionTypes.FETCH_AUTORS_ERROR,
    payload: error,
  };
};

const fetchAutores = () => {
  return (dispatch) => {
    dispatch(fetchAutoresRequest());
    Axios.get(endpoints.AUTORS)
      .then((res) => {
        dispatch(fetchAutoresSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchAutoresError(error.message));
      });
  };
};

export default fetchAutores;
