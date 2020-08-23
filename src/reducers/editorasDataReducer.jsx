import { actionTypes } from '../utils/js/constants';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const editorasDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_EDITORAS_REQUEST:
      return { ...state, loading: true, error: null };

    case actionTypes.FETCH_EDITORAS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };

    case actionTypes.FETCH_EDITORAS_DELETE:
      return {
        ...state,
        data: state.data.filter((autor) => autor.id !== action.payload.id),
      };

    case actionTypes.FETCH_EDITORAS_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default editorasDataReducer;
