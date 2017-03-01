import React, { Component } from 'react';
import { Link } from 'react-router';

const Header = ({select}) => {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <span><img src="https://openclipart.org/image/30px/svg_to_png/227918/Video-Game-Controller-Icon.png"
                width="30" height="30" className="d-inline-block align-top" alt="snes controller image" /></span>
              &nbsp;GameBin
            </a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className={select === "home" ? "active" : ""}><Link to="/">Home</Link></li>
              <li className={select === "collection" ? "active" : ""}><Link to="/collection">Game Collection</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
