import { combineReducers } from 'redux';
import autoresDataReducer from './autoresDataReducer';
import editorasDataReducer from './editorasDataReducer';
const rootReducer = combineReducers({
  autoresData: autoresDataReducer,
  editorasData: editorasDataReducer,
});

export default rootReducer;
