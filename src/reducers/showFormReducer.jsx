import { actionTypes } from '../utils/js/constants';

const initialState = {
  opened: false,
};

const showFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_FORM:
      return { ...state, opened: !state.opened };
    default:
      return state;
  }
};

export default showFormReducer;
