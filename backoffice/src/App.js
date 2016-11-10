import React, { Component } from 'react';
import logo from './img/logoTransparent300.png';
import Content from './Content.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Content />
      </div>
    );
  }
}

export default App;
