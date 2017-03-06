import React, { Component } from 'react';
import { Link } from 'react-router';

const Game = ({title, summary, image, id, del}) => {
  return (
    <div className="game-container">
      <div className="panel panel-game">
        <div className="panel-heading">
          <h3 className="panel-title">{title}</h3>
        </div>
        <div className="panel-body">
          <p className="picture"><img className="gameImage" src={image} /></p>
          <p>{summary}</p>
          <h1>{id}</h1>
          <Link to={ {pathname: '/', query:
            {
              id: id,
              title: title,
              description: summary,
              img: image
            }
            }} >Edit</Link>
            <button onClick={del(String(id))}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Game;
