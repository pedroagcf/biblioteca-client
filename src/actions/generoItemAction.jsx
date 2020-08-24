import { actionTypes, endpoints } from '../utils/js/constants';
import Axios from 'axios';

export const deleteGeneroRequest = () => {
  return {
    type: actionTypes.FETCH_GENERO_ITEM_REQUEST,
  };
};

export const deleteGeneroSuccess = (id) => {
  return {
    type: actionTypes.FETCH_GENEROS_DELETE,
    payload: { id },
  };
};

export const deleteGeneroError = (error) => {
  return {
    type: actionTypes.FETCH_GENERO_ITEM_ERROR,
    payload: error,
  };
};

// export const deleteAutorAction = (id) => {
//   return {
//     type: actionTypes.FETCH_AUTORS_DELETE,
//     payload: { id },
//   };
// };

const deleteGenero = (id) => {
  console.log('genero editora');

  return (dispatch) => {
    dispatch(deleteGeneroRequest());
    Axios.delete(`${endpoints.GENEROS_LITERARIOS}/${id}`)
      .then((res) => {
        dispatch(deleteGeneroSuccess(id));
        // dispatch(deleteAutorAction(id));
      })
      .catch((error) => {
        dispatch(deleteGeneroError(error.message));
      });
  };
};

export default deleteGenero;
