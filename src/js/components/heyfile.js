import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchGames, addGame, updateGame, deleteGame } from '../actions';
import { bindActionCreators } from 'redux';

export class Hello extends Component {

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(fetchGames())
      .then(() => {
        console.log(this.props.games[2]);
      });
  }

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

  updateOneGame(){
    const { dispatch } = this.props;
    const fillerUpdate = {
      title: "mario",
      description: "jump man is coming back with a punch",
      img: "more awesomest image ever made"
    }
    dispatch(updateGame(this.props.games[0]._id, JSON.stringify(fillerUpdate)))
      .then(() => {
        dispatch(fetchGames());
      })
      .catch((err) => { console.log(err) });
  }

  deleteOneGame() {
    const { dispatch } = this.props;
    dispatch(deleteGame(this.props.games[0]._id))
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
        <button onClick={this.updateOneGame.bind(this)}>Click me update first Game</button>
        <button onClick={this.deleteOneGame.bind(this)}>Click me delete first Game</button>
        <h1>My name is cesar!</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { games: state.games.games }
}

export default connect(mapStateToProps)(Hello);
