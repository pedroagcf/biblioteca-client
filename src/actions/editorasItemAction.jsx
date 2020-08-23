import { actionTypes, endpoints } from '../utils/js/constants';
import Axios from 'axios';

export const deleteAutorRequest = () => {
  return {
    type: actionTypes.FETCH_EDITORA_ITEM_REQUEST,
  };
};

export const deleteAutorSuccess = (id) => {
  return {
    type: actionTypes.FETCH_AUTORS_DELETE,
    payload: { id },
  };
};

export const deleteAutorError = (error) => {
  return {
    type: actionTypes.FETCH_AUTOR_ITEM_ERROR,
    payload: error,
  };
};

// export const deleteAutorAction = (id) => {
//   return {
//     type: actionTypes.FETCH_AUTORS_DELETE,
//     payload: { id },
//   };
// };

const deleteAutor = (id) => {
  console.log('dentro da action');

  return (dispatch) => {
    dispatch(deleteAutorRequest());
    Axios.delete(`${endpoints.AUTOR_ITEM}/${id}`)
      .then((res) => {
        dispatch(deleteAutorSuccess(id));
        // dispatch(deleteAutorAction(id));
      })
      .catch((error) => {
        dispatch(deleteAutorError(error.message));
      });
  };
};

export default deleteAutor;
