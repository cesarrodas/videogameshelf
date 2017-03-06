import React, { Component } from 'react';
import Header from './header';
import Game from './game';
import { connect } from 'react-redux';
import { fetchGames, addGame, updateGame, deleteGame } from '../actions';

class Collection extends Component {
  constructor(props){
    super(props);

    this.state = {
      games: []
    };
    this.loadGames = this.loadGames.bind(this);
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

  loadGames(games) {
    if(games) {
      return games.map((game) => <Game key={game._id} id={game._id}
        title={game.title} summary={game.description} image={game.img} />)
    }
  }

  render() {
    return (
      <div>
        <Header select="collection" />
        <div className="container">
        <h1>GAMES!</h1>
          <div className="games-container">
            {this.loadGames(this.state.games)}
          </div>
        </div>
      </div>
    )
  }
}

//{JSON.stringify(this.state.games)}
const mapStateToProps = state => {
  return { state: state.games.games }
}

export default connect(mapStateToProps)(Collection);
