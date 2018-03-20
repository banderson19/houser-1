import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux';
import routes from './routes';




class App extends Component {
  render() {
    return (
      <div className="Body">
      <div className="Nav-greenbgc">
        <div className="Nav-leftContainer">
          <span> Houser Dashboard </span> 
          <span>Logout</span>
        </div>
      </div>
        <div className="App">
          {routes}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(App);
