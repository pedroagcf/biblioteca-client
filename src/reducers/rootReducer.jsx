import { combineReducers } from 'redux';
import autoresDataReducer from './autoresDataReducer';
import editorasDataReducer from './editorasDataReducer';
import generosDataReducer from './generosDataReducer';
import livrosDataReducer from './livrosDataReducer';
import showFormReducer from './showFormReducer';

const rootReducer = combineReducers({
  autoresData: autoresDataReducer,
  editorasData: editorasDataReducer,
  generosData: generosDataReducer,
  livrosData: livrosDataReducer,
  showFormData: showFormReducer,
});

export default rootReducer;
