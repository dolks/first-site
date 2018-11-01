import { UPDATE_SEARCH_BREEDS} from '../constants';

const INITIAL_STATE = {
    allBreeds: [{name:'Coonhound', image: 'https://vetstreet.brightspotcdn.com/dims4/default/55e292f/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F55%2F39e8a0a72211e0a0d50050568d634f%2Ffile%2FBlack-and-Tan-Coonhound-4-380mk062311.jpg'}, {name:'German Shepherd', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Female_German_Shepherd.jpg/330px-Female_German_Shepherd.jpg'}, {name: 'Corgi', image: 'https://www.lebernard.ca/wp-content/uploads/2018/06/Welsh-corgi-pembroke.jpg'}],
    searchBreeds: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_BREEDS:
        return {...state, searchBreeds: action.payload}
    default:
      return state;
  }
};