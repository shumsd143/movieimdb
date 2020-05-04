import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import Main from './components/main'
import {Route} from 'react-router-dom'
import Movie from './components/after_search/movie';

function App() {
  return (
    <div className="App">
      <Main/> 
      <Route path="/movies" component={Movie}></Route>
    </div>
  );
}

const mapStateToprops = (state)=>{
  return {
    myname:state.name
  }
}

export default connect(mapStateToprops)(App);