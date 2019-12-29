import {CLEAR_SEARCH_RESULTS} from '../actionTypes';


export default function clearSearch() {
    return dispatch => {
        dispatch({ type : CLEAR_SEARCH_RESULTS});
    } ;
};