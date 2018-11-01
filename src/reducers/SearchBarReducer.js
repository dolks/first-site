import { UPDATE_SEARCH_QUERY, TOGGLE_SEARCHING_STATE } from '../constants';

const INITIAL_STATE = {
    searchQuery: '',
    searching: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_QUERY:
        return {...state, searchQuery: action.payload};
    case TOGGLE_SEARCHING_STATE:
        return {...state, searching: !state.searching};
    default:
      return state;
  }
};