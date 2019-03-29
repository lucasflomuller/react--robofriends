import React, { Component } from 'react';
import CounterButton from './CounterButton';

class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <header>
        <h1>Robofriends</h1>
        <CounterButton color={'red'} />
      </header>
    );
  }
}

export default Header;