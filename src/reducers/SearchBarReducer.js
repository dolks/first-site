import { UPDATE_SEARCH_QUERY } from '../constants';

const INITIAL_STATE = {
    searchQuery: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_QUERY:
        return {...state, searchQuery: action.payload};
    default:
      return state;
  }
};