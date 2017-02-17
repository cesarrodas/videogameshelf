import React, { Component } from 'react';
import Header from './header';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="col-md-6">
            <h1>Video <strong>Games</strong></h1>
            <p>This website allows you to keep your present
              or future video game collection in one place. </p>
            <p>Plan ahead with a list of wishes or keep your highly
            regarded gem at the top with great descriptions that
            entice people on the fence.</p>
          </div>
          <div className="col-md-6">
            <h1>I will be the form element.</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
