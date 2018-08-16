import React, { Component } from 'react';
import Game from './screens/Game';
import Stats from './screens/Stats';
import Roster from './screens/Roster';
import SwipeableViews from 'react-swipeable-views';

class App extends Component {
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
