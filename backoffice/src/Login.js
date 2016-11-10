import React, { Component } from 'react';
import classNames from 'classnames';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      keyphase: 'pichaya',
      input: ''
    };
    console.log('set!:'+this.state.keyphase);
    this.handleTyping = this.handleTyping.bind(this);
  } 

  handleTyping(event) {
    console.log('got!:'+event.target.value);
        this.setState({
          input: event.target.value,
          status: event.target.value===this.state.keyphase
        });
        console.log('unlocked!');

  }
  render() {
    var formClasses = classNames('bs-example','bs-example-form',{ shake: !this.state.status }
    );
    var iconClasses = classNames('input-group-addon','glyphicon',{ 'glyphicon-ban-circle': !this.state.status },{ 'glyphicon-ok-circle': this.state.status }
    );
    var lockText = 'Locked';
    if(this.state.status){lockText = 'Unlocked!';}
    return (
        <form className={formClasses} data-example-id="simple-input-groups">
          <div className="input-group col-lg-4 col-lg-offset-4"> 
            <span className="input-group-addon" id="basic-addon1">{lockText}</span> 
            <input className="form-control" 
              aria-describedby="basic-addon1" 
              placeholder='keyphase' 
              value={this.state.input} 
              onChange={this.handleTyping} 
            /> 
            <span className={iconClasses} aria-hidden="true"></span>
          </div> 
        </form>
    );
  }
}

export default Login;



