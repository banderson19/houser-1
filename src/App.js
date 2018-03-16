import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="Body">
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
