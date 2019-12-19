import { FETCH_QUERY_BOOK, CLEAR_SEARCH_RESULTS } from '../actionTypes';


export default function searchResults(state = null, action){
    switch(action.type) {
        case FETCH_QUERY_BOOK:
            return action.payload;
        case CLEAR_SEARCH_RESULTS:
            return null;
        default:
            return state;
    }
}