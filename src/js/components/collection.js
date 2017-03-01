import React, { Component } from 'react';
import Header from './header';

class Collection extends Component {
  render() {
    return (
      <div>
        <Header select="collection" />
        <h1>Hello collection world!!1</h1>
      </div>
    )
  }
}

export default Collection;
