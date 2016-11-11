import React, { Component } from 'react';
import Login from './Login.js';

class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
  	let content = <span> Welcome ! {this.props.isLogin}</span>;
  	if(!this.props.isLogin){
  		content = <Login />;
  	}
    return (
      <div className="Content row">
        <div className="jumbotron col-lg-10 col-lg-offset-1">
          {content}
        </div>
      </div>
    );
  }
}

export default Content;



