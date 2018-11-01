import { combineReducers } from 'redux';
import homeReducer from './HomePageReducer';
import searchBarReducer from './SearchBarReducer';

export default combineReducers({
  home: homeReducer,
  searchBar: searchBarReducer,
});