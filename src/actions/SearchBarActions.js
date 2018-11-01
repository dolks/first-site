import { UPDATE_SEARCH_QUERY } from '../constants';

export const updateSearchQuery = (newQuery) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE_SEARCH_QUERY,
            payload: newQuery,
        });
    };
};