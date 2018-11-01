import { combineReducers } from 'redux';
import appReducer from './AppReducer';
import searchBarReducer from './SearchBarReducer';

export default combineReducers({
  app: appReducer,
  searchBar: searchBarReducer,
});