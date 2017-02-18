import React, { Component } from 'react';
import Header from './header';
import Form from './form';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <br /><br /><br />
          <div className="col-md-6">
            <div className="col-md-8 col-md-offset-2 border-info">
              <h1>Game <strong>Collection</strong></h1>
              <br/>
              <p>This website allows you to keep your present
                or future video game collection in one place. </p>
              <p>Plan ahead with a list of wishes or keep your highly
              regarded gem at the top with great descriptions that
              entice people on the fence.</p>
            </div>
          </div>
          <div className="col-md-6">
            <Form />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
