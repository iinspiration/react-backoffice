import React, { Component } from 'react';
import Cookie from 'react-cookie';
import logo from './img/logoTransparent300.png';
import Content from './Content.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Backoffice : photocanvas.in.th',
      'isLogin': Cookie.load('loggedIn')
      };
  } 

  render() {
    return (
      <div className="App container">
        <div className="App-header v-buffer-เบาๆ visible-lg-block">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Content isLogin={this.state.isLogin}/>
      </div>
    );
  }
}

export default App;
