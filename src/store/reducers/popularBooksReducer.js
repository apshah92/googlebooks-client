import {FETCH_POPULAR_BOOKS}  from '../actionTypes';


function popularBooksReducer( state = null, action) {
    //console.log('action payload:',action.payload);
    switch(action.type) {
        case FETCH_POPULAR_BOOKS:
            return action.payload;
        default:            
            return state;
    }
}

export default popularBooksReducer;