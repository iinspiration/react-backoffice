import React, { Component } from 'react';
import Login from './Login.js';

class Content extends Component {

  render() {
    return (
      <div className="Content row top-buffer">
        <div className="jumbotron col-lg-10 col-lg-offset-1">
          <Login />
        </div>
      </div>
    );
  }
}

export default Content;



