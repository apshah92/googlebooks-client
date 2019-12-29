import React, { Component } from 'react';
import '../styles/bookcard.css';

class BookCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {        
        var { title, authors, description, thumbnailLink, publisher, canonicalVolumeLink } = this.props.bookInfo  ;
        return (
        <div className="book-card s12 m6 l6 z-depth-4">
            <div className="previewBook">
                {canonicalVolumeLink && thumbnailLink && <a href={canonicalVolumeLink}><img src={ thumbnailLink } className="book-image" /></a> || <div className="no-image-div"><b>No Image Available</b></div>}
                
            </div>
            <div className="volumeInfo">
                <div className="infoContainer">
                    <table>
                        <tr>
                            <td className="field"><b>Title</b></td>
                            <td className="seperator"><b>:</b></td>
                            <td>{ title &&  title || "No Title Available" }</td>
                        </tr>
                        <tr>
                            <td className="field"><b>Authors</b></td>
                            <td className="seperator"><b>:</b></td>
                            <td>{ authors && authors.join(", ") || "No Authors Info Available"}</td>
                        </tr>
                        <tr>
                            <td className="field"><b>Description</b></td>
                            <td className="seperator"><b>:</b></td>
                            <td>{ description && (description.split(" ").length > 30 ? <> {description.split(" ").splice(0,30).join(" ")} <a href={canonicalVolumeLink}>more</a> </> : description ) || "No Description Available" }</td>
                        </tr>
                        <tr>
                            <td className="field"><b>Publishers</b></td>
                            <td className="seperator"><b>:</b></td>
                            <td>{ publisher && publisher || "No Publisher Info Available"}</td>
                        </tr>
                    </table>
                </div>                
            </div>
        </div>
        );
    }
}

export default BookCard;