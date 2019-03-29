import React, { Component } from 'react';

class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <header>
        <h1>Robofriends</h1>
      </header>
    );
  }
}

export default Header;