import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchGames, addGame, updateGame, deleteGame } from '../actions';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      img: '',
      limit: 200
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    let newState = {};

    if(e.target.name === "description") {
      let field = 200 - e.target.value.length;
      newState['limit'] = field;
    }

    newState[e.target.name] = e.target.value;

    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { dispatch } = this.props;

    let newGame = {
      title: this.state.title,
      description: this.state.description,
      img: this.state.img
    }
    console.log(newGame);
    console.log("AM I RUNNING AT ALL ?!");

    if (newGame.title.length < 1 || newGame.description.length < 1 || newGame.img.length < 1) {
      return false;
    }

    dispatch(addGame(JSON.stringify(newGame)))
      .then(() => {
        this.setState({
          title: '',
          description: '',
          img: '',
          limit: 200
        });
        dispatch(fetchGames());
      })
      .catch((err) => { console.log(err) });
  };

  render() {
    return (
      <form>
        <h2>Enter a video game!</h2>
        <br />
        <div className="form-group row">
          <label htmlFor="gameInput">Name:</label>
          <input maxLength={20} onChange={this.handleChange} value={this.state.title} type="game" className="form-control" name='title' id="gameInput" required aria-describedby="gameName" placeholder="Enter game" />
        </div>
        <div className="form-group row">
          <label htmlFor="exampleTextarea">Description: </label>
          <textarea maxLength={200} onChange={this.handleChange} value={this.state.description} className="form-control" name="description" required placeholder="Enter a short game description." id="exampleTextarea" rows="3"></textarea>
          <small id="gameDescription" className="form-text text-muted">{this.state.limit} characters </small>
        </div>
        { this.state.img ?
          <p className="pic"><img src={this.state.img} onError={(e) => e.currentTarget.style.display = "none"} height="200" maxWidth="300" /></p> :
          null
        }
        <div className="form-group row">
          <label htmlFor="example-url-input" className="col-2 col-form-label">Image: </label>
          <div className="col-10">
            <input onChange={this.handleChange} value={this.state.img} className="form-control" type="url" placeholder="Enter image link." required name='img' id="example-url-input"/>
          </div>
        </div>
        <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Add Game!</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return { state: state.games.games }
}

export default connect(mapStateToProps)(Form);
