import { combineReducers } from 'redux';
import popularBooksReducer from './popularBooksReducer';
import searchResultsReducer from './searchResults';



var reducers = combineReducers({ popularBooks : popularBooksReducer, searchResults : searchResultsReducer });


export default reducers;

