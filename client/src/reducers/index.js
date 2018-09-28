import { combineReducers } from 'redux';
import listReducer from './listReducer';

const rootReducer = combineReducers({
  app: listReducer
})

export default rootReducer;
