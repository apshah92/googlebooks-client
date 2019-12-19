
import PopularBooks from '../../popularBooks';
import {FETCH_POPULAR_BOOKS} from '../actionTypes';
import store from '../store';

async function fetchPopularBooks() {
    //console.log('action creator fetchpopularbooks called');
    //return async dispatch => {
        var booksData = [];
        for(var i=0; i < PopularBooks.length; i++){
            var res = await fetch('https://www.googleapis.com/books/v1/volumes?q='+PopularBooks[i]);
            var json = await res.json();
            var data = json.items[0].volumeInfo;

            var bookinfo = { 
                title : data.title, 
                authors : data.authors, 
                publisher : data.publisher,
                description : data.description,
                thumbnailLink : data.imageLinks.thumbnail,
                canonicalVolumeLink : data.canonicalVolumeLink
            };
            
            booksData.push(bookinfo);
        }
        store.dispatch({ type : FETCH_POPULAR_BOOKS, payload : booksData });
    //}
}

export default fetchPopularBooks;