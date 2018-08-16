import React, { Component } from 'react';
import Game from './components/Game';
import Stats from './components/Stats';
import Roster from './components/Roster';
import SwipeableViews from 'react-swipeable-views';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: ['/roster', '/game', '/stats'],
      currentPageIndex: 0
    };
  }
  render() {
    return (
      <SwipeableViews>
        <Roster />
        <Game />
        <Stats />
      </SwipeableViews>
    );
  }
}

export default App;
