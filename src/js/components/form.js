import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGames, addGame, updateGame } from '../actions';

function validate(title, description, img){
  let errors = {};
  if(title.length < 1){
    errors.title = "Enter a videogame title."
  };
  if(description.length < 1){
    errors.description = "Enter a description."
  };
  if(img.length < 1){
    errors.img = "Enter an image link."
  };

  const pattern = new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$');
  if(!pattern.test(img)) {
    errors.img = "Enter a valid image link."
  }
  return errors;
}

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.formInfo.query.title ? this.props.formInfo.query.title : '',
      description: this.props.formInfo.query.description ? this.props.formInfo.query.description : '',
      img: this.props.formInfo.query.img ? this.props.formInfo.query.img : '',
      key: this.props.formInfo.query.id ? this.props.formInfo.query.id : '',
      limit: 200,
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleChange(e){
    let newState = {};

    if(e.target.name === "description") {
      let field = 200 - e.target.value.length;
      newState['limit'] = field;
    }

    if(Object.keys(this.state.errors).length > 0){
      var errors = validate(this.state.title, this.state.description, this.state.img);

      if(Object.keys(errors).length > 0){
        this.setState({
          errors: errors
        });
      }
    }

    newState[e.target.name] = e.target.value;

    this.setState(newState);
  }

  reset() {
    this.setState({
      title: '',
      description: '',
      img: '',
      key: '',
      limit: 200,
      errors: {}
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { dispatch } = this.props;

    var errors = validate(this.state.title, this.state.description, this.state.img);

    if(Object.keys(errors).length > 0){
      this.setState({
        errors: errors
      });
      return false;
    }

    let newGame = {
      title: this.state.title,
      description: this.state.description,
      img: this.state.img
    }

    if(this.state.key){
      dispatch(updateGame(this.state.key, JSON.stringify(newGame)))
        .then(() => {
          this.reset();
          dispatch(fetchGames());
        })
        .catch((err) => { console.log(err) });
    } else {
      dispatch(addGame(JSON.stringify(newGame)))
        .then(() => {
          this.reset()
          dispatch(fetchGames());
        })
        .catch((err) => { console.log(err) });
    }
  };

  render() {
    return (
      <form>
        <h2>{ this.state.key ? "Practice makes perfect!" : "Enter a game!"}</h2>
        <br />
        <div className="form-group row">
          <label htmlFor="gameInput">Name:</label>
          {JSON.stringify(this.props.location)}
          <input maxLength={20} onChange={this.handleChange} value={this.state.title} type="game" className="form-control" name='title' id="gameInput" required aria-describedby="gameName" placeholder="Enter game" />
          { this.state.errors ? <small className="form-text text-muted error">{this.state.errors.title}</small> : null}
        </div>
        <div className="form-group row">
          <label htmlFor="exampleTextarea">Description: </label>
          <textarea maxLength={200} onChange={this.handleChange} value={this.state.description} className="form-control" name="description" required placeholder="Enter a short game description." id="exampleTextarea" rows="3"></textarea>
          <small id="gameDescription" className="form-text text-muted">{this.state.limit} characters </small>
          { this.state.errors ? <small className="form-text text-muted error">{this.state.errors.description}<br/></small> : null}
        </div>
        { this.state.img ?
          <p className="picture"><img className="formPicture" src={this.state.img} onError={(e) => e.currentTarget.style.display = "none"} /></p> :
          null
        }
        <div className="form-group row">
          <label htmlFor="example-url-input" className="col-2 col-form-label">Image: </label>
          <div className="col-10">
            <input onChange={this.handleChange} value={this.state.img} className="form-control" type="url" placeholder="Enter image link." required name='img' id="example-url-input"/>
            { this.state.errors ? <small className="form-text text-muted error">{this.state.errors.img}</small> : null}
          </div>
        </div>
        <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">{ this.state.key ? "Update Game!" : "Add Game!"}</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return { state: state.games.games }
}

export default connect(mapStateToProps)(Form);
