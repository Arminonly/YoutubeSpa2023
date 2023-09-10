import { combineReducers } from 'redux';
import { searchReducer } from './reducers';

export const rootReducer = combineReducers({
  reducer: searchReducer
});
