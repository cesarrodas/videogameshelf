import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchGames, addGame } from '../actions';
import { bindActionCreators } from 'redux';

// function getGamesHelper(){
//   const baseUrl = 'https://gamecollection.now.sh/games';
//   return fetch(baseUrl)
//     .then(res => res.json())
//     .catch(err => console.log(err));
// };
export class Hello extends Component {

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(fetchGames());
  }

  // getGames(){
  //   getGamesHelper()
  //     .then(games => this.setState({games}));
  // }

  /*
  */
  addGame() {
    const { dispatch } = this.props;
    const fillerGame = {
      title: "splats",
      description: "awesome shooting",
      img: "great image of majestic moment"
    }
    dispatch(addGame(JSON.stringify(fillerGame)))
      .then(() => {
        dispatch(fetchGames());
      })
      .catch((err) => { console.log(err) });
  }

  render(){
    console.log("props: ", this.props);
    return (
      <div className="hello">
        <h2>Hello World!</h2>
        <button onClick={this.addGame.bind(this)}>Click me add Game</button>
        <h1>My name is cesar!</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { games: state.games.games }
}

export default connect(mapStateToProps)(Hello);
