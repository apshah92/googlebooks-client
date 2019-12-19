import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from '../store/actions';
//import searchicon from '../images/search-icon2.png';
import 'materialize-css/dist/css/materialize.css';
import '../styles/navbar.css';



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggled : false
        };
        this.toggleSearch = this.toggleSearch.bind(this);
        this.triggerSearch = this.triggerSearch.bind(this);
    }

    toggleSearch() {
        this.setState({isToggled : !this.state.isToggled});
    }

    triggerSearch(event) {
        event.preventDefault();
        let query = event.target.search.value ;
        this.props.fetchQueryBook(query);
    }
    
    render() {
        var formStyle = {"border-bottom":"1px solid #455a64"};
        var searchbarStyle = {"margin":"0","height":"100%"};
        return (
            <>
                <nav>
                    <div className="nav-wrapper main-navbar  blue-grey darken-4">
                        <div className="logo-div">
                            <Link className="brandLogo" to={location => { this.props.clearSearch(); return {...location,pathname:"/"}}}>
                                Bookstore-Redux
                            </Link>
                            <span className="subheader">A Client Interface for Google Books Api</span>
                        </div>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="#!"><i className="material-icons" onClick={this.toggleSearch}>search</i></a></li>
                        </ul>                        
                    </div>                                                       
                </nav>
                {this.state.isToggled && 
                    <form onSubmit={this.triggerSearch} style={formStyle}>
                        <div className="input-field blue-grey darken-2" style={searchbarStyle}>
                            <input id="search" type="search" placeholder="Enter Book Tilte, Author or Keywords to search" required />
                            <i className="material-icons closeIcon" onClick={this.toggleSearch}>close</i>
                        </div>
                    </form>
                }
                          
            </>
        );
    }
}

// {/* <div className="main-navbar">
//                     <div className="app-info">
//                         <Link to={(location) => { console.log('link fired');this.props.clearSearch(); return {...location,pathname:"/"}}}><span className="app-name">Bookstore-Redux</span></Link><br/>
//                         <span className="app-developer">Search Books from Google Books Api.</span>
//                     <img src={searchicon} className="search-icon" onClick={this.toggleSearch}/>
//                     </div>
//                 </div> */}




var mapDispatchToProps = {
    fetchQueryBook : actions.fetchQueryBook,
    clearSearch : actions.clearSearch
}

export default connect(null,mapDispatchToProps) (Header);