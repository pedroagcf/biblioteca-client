import { actionTypes, endpoints } from '../utils/js/constants';
import Axios from 'axios';

export const deleteEditoraRequest = () => {
  return {
    type: actionTypes.FETCH_EDITORA_ITEM_REQUEST,
  };
};

export const deleteEditoraSuccess = (id) => {
  return {
    type: actionTypes.FETCH_EDITORAS_DELETE,
    payload: { id },
  };
};

export const deleteEditoraError = (error) => {
  return {
    type: actionTypes.FETCH_EDITORA_ITEM_ERROR,
    payload: error,
  };
};

// export const deleteAutorAction = (id) => {
//   return {
//     type: actionTypes.FETCH_AUTORS_DELETE,
//     payload: { id },
//   };
// };

const deleteEditora = (id) => {
  console.log('delete editora');

  return (dispatch) => {
    dispatch(deleteEditoraRequest());
    Axios.delete(`${endpoints.EDITORAS}/${id}`)
      .then((res) => {
        dispatch(deleteEditoraSuccess(id));
        // dispatch(deleteAutorAction(id));
      })
      .catch((error) => {
        dispatch(deleteEditoraError(error.message));
      });
  };
};

export default deleteEditora;
