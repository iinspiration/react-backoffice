import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <div className="Content row">
        <div className="jumbotron">

          <form className="bs-example bs-example-form" data-example-id="simple-input-groups">
            <div className="input-group col-lg-4 col-lg-offset-4"> 
              <span className="input-group-addon" id="basic-addon1">login</span> 
              <input className="form-control" placeholder="Username" aria-describedby="basic-addon1" /> 
            </div> 
          </form>

        </div>
      </div>
    );
  }
}

export default Content;



