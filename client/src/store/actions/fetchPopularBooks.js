
import PopularBooks from '../../popularBooks';
import {FETCH_POPULAR_BOOKS} from '../actionTypes';
import store from '../store';

function fetchPopularBooks() {
    //console.log('action creator fetchpopularbooks called');
    return async dispatch => {
        var booksData = [];
        var ajxReqs = [];
        PopularBooks.forEach( booktitle => ajxReqs.push( fetch('https://www.googleapis.com/books/v1/volumes?q='+booktitle+'&maxResults=1') ));
                        
    
        await Promise.all(ajxReqs).then( async resArray => { 
            for(let i=0; i < resArray.length; i++){ 
                var json = await resArray[i].json();
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
        });
        
        dispatch({ type : FETCH_POPULAR_BOOKS, payload : booksData });
    }
}

export default fetchPopularBooks;