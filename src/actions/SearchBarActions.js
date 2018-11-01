import { UPDATE_SEARCH_QUERY, TOGGLE_SEARCHING_STATE, UPDATE_SEARCH_BREEDS } from '../constants';

export const updateSearchQuery = (newQuery) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE_SEARCH_QUERY,
            payload: newQuery,
        });
    };
};

export const searchBreedsFunction = (term, allBreeds) => {
    return (dispatch) => {
        dispatch({type: TOGGLE_SEARCHING_STATE});
        if (!term){
          dispatch({type: TOGGLE_SEARCHING_STATE});
          return;
        }
        let currBreeds = allBreeds;
        let newBreeds = [];
        term = term.toLowerCase();
        for (let i=0; i<currBreeds.length; i++){
          if(~currBreeds[i].name.toLowerCase().indexOf(term)){
            newBreeds.push(currBreeds[i]);
          } else {
            continue;
          } 
        };
        if (newBreeds.length === 0){
            window.alert("No results found.");
            dispatch({type: UPDATE_SEARCH_BREEDS, payload: allBreeds});
            dispatch({type: TOGGLE_SEARCHING_STATE});
            return;
        }
        dispatch({type: UPDATE_SEARCH_BREEDS, payload: newBreeds});
        dispatch({type: TOGGLE_SEARCHING_STATE});
        
    };
};