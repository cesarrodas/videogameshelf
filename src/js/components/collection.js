import React, { Component } from 'react';
import Header from './header';

class Collection extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Header select="collection" />
        <div className="container">
        </div>
      </div>
    )
  }
}

export default Collection;
