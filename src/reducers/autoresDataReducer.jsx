import { actionTypes } from '../utils/js/constants';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const autoresDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_AUTORS_REQUEST:
      return { ...state, loading: true, error: null };

    case actionTypes.FETCH_AUTORS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };

    case actionTypes.FETCH_AUTORS_DELETE:
      return {
        ...state,
        data: state.data.filter((autor) => autor.id !== action.payload.id),
      };

    case actionTypes.FETCH_AUTORS_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default autoresDataReducer;
