import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from '../actions';
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

  //{JSON.stringify(this.state.games)}
  //<button onClick={this.getGames.bind(this)}>Clickme to Fetch</button>
  */

  render(){
    console.log("props: ", this.props);
    return (
      <div className="hello">
        <h2>Hello World!</h2>
        <h1>My name is cesar!</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { games: state.games.games }
}

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(actions, dispatch);
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Hello);
export default connect(mapStateToProps)(Hello);
