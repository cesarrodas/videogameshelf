import React, { Component } from 'react';
import Header from './header';
import Game from './game';
import Modal from './modal';
import { connect } from 'react-redux';
import { fetchGames, deleteGame } from '../actions';

class Collection extends Component {
  constructor(props){
    super(props);

    this.state = {
      games: [],
      delete: ''
    };
  }

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(fetchGames())
      .then((collection) => {
        this.setState({
          games: collection.value
        });
      });
  }

  deleteThisGame(id) {

    const { dispatch } = this.props;
    dispatch(deleteGame(id))
      .then(() => {
        dispatch(fetchGames())
          .then((collection) => {
            this.setState({
              games: collection.value
            });
          });
      });
  }

  setGameID(id) {
    this.setState({
      delete: id
    });
  }

  render(games) {
    const loadGames = (games) => {
      return games.map((game) => <Game key={game._id} changeID={this.setGameID.bind(this)}
        del={this.deleteThisGame.bind(this)} id={game._id}
        title={game.title} summary={game.description} image={game.img} />);
    }

    return (
      <div>
        <Header select="collection" />
        <div className="container">
        <h1>GAMES!</h1>
          <div className="games-container">
            {loadGames(this.state.games)}
            <Modal del={this.deleteThisGame.bind(this)} id={this.state.delete} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { state: state.games.games }
}

export default connect(mapStateToProps)(Collection);
