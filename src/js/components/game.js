import React, { Component } from 'react';
import { Link } from 'react-router';

const Game = ({title, summary, image, id, del, changeID}) => {
  return (
    <div className="game-container">
      <div className="panel panel-game">
        <div className="panel-heading">
          <h3 className="panel-title">{title}</h3>
        </div>
        <div className="panel-body">
          <p className="picture"><img className="gameImage" src={image} /></p>
          <h3>{title}</h3>
          <p>{summary}</p>
          <hr className="style" />
          <div className="buttonHelper">
            <Link className="btn btn-info editButton" to={ {pathname: '/', query:
                {
                  id: id,
                  title: title,
                  description: summary,
                  img: image
                }
                }} >Edit</Link>
              <button className="btn btn-warning deleteButton" data-toggle="modal" onClick={() => changeID(id)} data-target="#deleteModal" type="button" >Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game;
