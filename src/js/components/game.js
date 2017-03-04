import React, { Component } from 'react';

const Game = ({title, summary, image}) => {
  return (
    <div className="game-container">
      <div className="panel panel-game">
        <div className="panel-heading">
          <h3 className="panel-title">{title}</h3>
        </div>
        <div className="panel-body">
          {summary}
        </div>
      </div>
    </div>
  )
}

export default Game;
