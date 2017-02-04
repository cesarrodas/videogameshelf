import React from 'react';

function getGamesHelper(){
  const baseUrl = 'https://gamecollection.now.sh/games';
  return fetch(baseUrl)
    .then(res => res.json())
    .catch(err => console.log(err));
};

export class Hello extends React.Component {
  constructor() {
    super()
    this.state = {
      games: []
    }
  }

  getGames(){
    getGamesHelper()
      .then(games => this.setState({games}));
  }

  render(){
    return (
      <div className="hello">
        <h2>Hello World!</h2>
        {JSON.stringify(this.state.games)}
        <button onClick={this.getGames.bind(this)}>Clickme to Fetch</button>
        <h1>My name is cesar! :D</h1>
      </div>
    );
  }
}
