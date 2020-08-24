import { actionTypes } from '../utils/js/constants';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const generosDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENEROS_REQUEST:
      return { ...state, loading: true, error: null };

    case actionTypes.FETCH_GENEROS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };

    case actionTypes.FETCH_GENEROS_DELETE:
      console.log('reducer fetch editoras delete');

      return {
        ...state,
        data: state.data.filter((editora) => editora.id !== action.payload.id),
      };

    case actionTypes.FETCH_GENEROS_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default generosDataReducer;
