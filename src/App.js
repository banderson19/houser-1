import React, { Component } from 'react';
import './App.css';

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

export default App;
