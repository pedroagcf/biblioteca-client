import { actionTypes, endpoints } from '../utils/js/constants';
import Axios from 'axios';

export const sendEditoraRequest = () => {
  return {
    type: actionTypes.EDITORA_FORM_REQUEST,
  };
};

export const sendEditoraSuccess = (transactionDetails) => {
  return {
    type: actionTypes.EDITORA_FORM_SUCCESS,
    payload: transactionDetails,
  };
};

export const sendEditoraError = (error) => {
  return {
    type: actionTypes.EDITORA_FORM_ERROR,
    payload: error,
  };
};

export const fetchEditorasSuccess = (transactionDetails) => {
  return {
    type: actionTypes.FETCH_EDITORAS_SUCCESS,
    payload: transactionDetails,
  };
};

const sendEditora = (value) => {
  return (dispatch) => {
    dispatch(sendEditoraRequest());
    Axios.post(endpoints.EDITORAS, value)
      .then((res) => {
        dispatch(sendEditoraSuccess(res.data));
      })
      .then(() => {
        Axios.get(endpoints.EDITORAS).then((res) => {
          dispatch(fetchEditorasSuccess(res.data));
        });
      })
      .catch((error) => {
        dispatch(sendEditoraError(error.message));
      });
  };
};

export default sendEditora;
