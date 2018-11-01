import { UPDATE_SEARCH_BREEDS, TOGGLE_SEARCHING_STATE } from '../constants';

export const updateSearchBreeds = (breedList) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE_SEARCH_BREEDS,
            payload: breedList,
        });
    };
};

export const toggleSearchingState = () => {
    return (dispatch) => {
        dispatch({
            type: TOGGLE_SEARCHING_STATE,
        });
    };
};
