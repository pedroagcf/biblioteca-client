import { combineReducers } from 'redux';
import autoresDataReducer from './autoresDataReducer';
const rootReducer = combineReducers({
  autoresData: autoresDataReducer,
});

export default rootReducer;
