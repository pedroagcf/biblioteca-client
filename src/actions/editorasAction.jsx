import { actionTypes, endpoints } from '../utils/js/constants';
import Axios from 'axios';

export const fetchEditorasRequest = () => {
  return {
    type: actionTypes.FETCH_EDITORAS_REQUEST,
  };
};

export const fetchEditorasSuccess = (transactionDetails) => {
  return {
    type: actionTypes.FETCH_EDITORAS_SUCCESS,
    payload: transactionDetails,
  };
};

export const fetchEditorasError = (error) => {
  return {
    type: actionTypes.FETCH_EDITORAS_ERROR,
    payload: error,
  };
};

const fetchEditoras = () => {
  return (dispatch) => {
    dispatch(fetchEditorasRequest());
    Axios.get(endpoints.EDITORAS)
      .then((res) => {
        dispatch(fetchEditorasSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchEditorasError(error.message));
      });
  };
};

export default fetchEditoras;
