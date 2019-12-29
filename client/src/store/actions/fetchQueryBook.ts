import { FETCH_QUERY_BOOK } from '../actionTypes';


function fetchQueryBook(query:string) {
    return async (dispatch:any) => {
        var res = await fetch('https://www.googleapis.com/books/v1/volumes?q='+query+'&maxResults=40');
        var json = await res.json();
        var data = json.items.map( (item:any) => ( item.volumeInfo && {
            title : item.volumeInfo.title || "", 
            authors : item.volumeInfo.authors || [], 
            publisher : item.volumeInfo.publisher || "",
            description : item.volumeInfo.description || "",
            thumbnailLink : item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail || "",
            canonicalVolumeLink : item.volumeInfo.canonicalVolumeLink || ""
        } ));
        dispatch({ type : FETCH_QUERY_BOOK, payload : data});
    };
}

export default fetchQueryBook;