import React, { Component } from 'react';
import Cookie from 'react-cookie';
import classNames from 'classnames';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      keyphase: null,
      date: null,
      user: 'Admin',
      input: ''
    };
    this.handleTyping = this.handleTyping.bind(this);
  } 

  componentDidUpdate() {
    if(this.state.status){
          Cookie.save('loggedIn', this.state.keyphase, { path: '/' });
          console.log('unlocked!');
          //route to / dashboard
        }
  }

  componentWillMount() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    this.setState({
          date: [year, month, day].join('-'),
          keyphase: year-month-day
        });
  }

  handleTyping(event) {
    console.log('got!:'+event.target.value);
        this.setState({
          input: event.target.value,
          status: parseInt(event.target.value)===this.state.keyphase
        });
  }

  render() {
    var formClasses = classNames('bs-example','bs-example-form',{ shake: !this.state.status }
    );
    var iconClasses = classNames('input-group-addon','glyphicon',{ 'glyphicon-ban-circle': !this.state.status },{ 'glyphicon-ok-circle': this.state.status }
    );
    return (
        <form className={formClasses} data-example-id="simple-input-groups">
          <div className="input-group col-lg-4 col-lg-offset-4"> 
            <span className="input-group-addon" id="basic-addon1">{this.state.date}</span> 
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



