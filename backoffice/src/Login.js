import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyphase: 'pichaya'
    };
    console.log('set!:'+this.state.keyphase);
    this.handleLogin = this.handleLogin.bind(this);
  } 
  handleLogin(event) {
        this.setState({
          keyphase: 'ssssss'
        });
        console.log('click!:'+this.state.keyphase);
    }
  render() {
    return (
        <form className="bs-example bs-example-form" data-example-id="simple-input-groups">
          <div className="input-group col-lg-4 col-lg-offset-4"> 
            <span className="input-group-addon" id="basic-addon1">login</span> 
            <input className="form-control" placeholder={this.state.keyphase} aria-describedby="basic-addon1" /> 
            <span className="input-group-addon" onClick={this.handleLogin}>GO!</span>
          </div> 
        </form>
    );
  }
}

export default Login;



