import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions';
import BookCard from '../components/bookCard';
import 'materialize-css/dist/css/materialize.css';


class Homepage extends Component {
    constructor(props) {
        super(props);
        //this.renderBookCards = this.renderBookCards.bind(this);
    }

    // componentWillMount() {
    //     this.props.fetchPopularBooks();
    // }


    render() {
        var bookData =  this.props.searchResults ||  this.props.popularBooks || [] ;
        console.log('time to get bookData from store:',bookData,' time',Date.now());    
        var bookCards = [] ;
        var header = this.props.searchResults ? <h4 style={{"margin-left":"30px"}}>Search Results:</h4> : <h4 style={{"margin-left":"30px"}}>Best Sellers:</h4>;
        
        var time = Date.now();
        bookCards = bookData.map( (bookInfo,index) => <div key={index}><BookCard bookInfo={bookInfo} index={index} /></div>);
        console.log('time to create all cards:',Date.now()-time, ' bookcards:',bookData);
        //console.log('bookData:',bookData,' bookCards:',bookCards);
        return (<div class>
                    {header} 
                    <div className="row">
                        { bookCards }
                    </div>                                     
                </div> 
        );
    }
}

function mapStateToProps({popularBooks,searchResults}) {
    return { popularBooks , searchResults};
};

var mapDispatchToProps = {
    fetchPopularBooks : actions.fetchPopularBooks
};


export default connect(mapStateToProps)(Homepage);