import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './components/navbar';
import Homepage from './pages/homepage';
import './styles/app.css';





class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <Header/>
          <Route exact path="/" component={Homepage} />
           
        </BrowserRouter>
    );
  }
}
export default App;
