import React, { Component } from 'react';
import Header from './header';
import Form from './form';

class Home extends Component {
  render() {
    return (
      <div>
        <Header select="home" />
        <div className="container">
          <br /><br /><br />
          <div className="col-md-6">
            <div className="col-md-8 col-md-offset-2 border-info">
              <h1>Game <strong>Collection</strong></h1>
              <br/>
              <p>This website allows you to keep your present
                or future video game collection in one place. </p>
              <p>Plan ahead with a list that showcases what you want to play or
              build a large collection that displays your gaming prowess.</p>
              <br />
              <p className="picture"><img src="http://www.dkvine.com/games/dkc/characters/images/donkey_kong_07.png"
                alt="donkey kong character picture." height="240"/></p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col-md-10 col-md-offset-1">
              <Form formInfo={this.props.location} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
