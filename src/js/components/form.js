import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <h2>Enter a video game!</h2>
        <br />
        <div className="form-group row">
          <label htmlFor="gameInput">Name:</label>
          <input type="game" className="form-control" id="gameInput" aria-describedby="gameName" placeholder="Enter game" />
        </div>
        <div className="form-group row">
          <label htmlFor="exampleTextarea">Description: </label>
          <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
          <small id="emailHelp" className="form-text text-muted">Share a short description or experience. </small>
        </div>
        <div className="form-group row">
          <label htmlFor="example-url-input" class="col-2 col-form-label">Image: </label>
          <div className="col-10">
            <input className="form-control" type="url" value="Enter image link." id="example-url-input"/>
          </div>
        </div>
      </form>
    )
  }
}

export default Form;
