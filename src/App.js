import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { HashRouter as Router } from 'react-router-dom';
import Game from './components/Game';
import Stats from './components/Stats';
import Roster from './components/Roster';
import Swipeable from 'react-swipeable';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/roster"
            render={({ history }) => (
              <Swipeable
                onSwipedLeft={e => {
                  history.replace('/game');
                }}
              >
                <Roster />
              </Swipeable>
            )}
          />
          <Route
            path="/game"
            render={({ history }) => (
              <Swipeable
                onSwipedRight={e => {
                  history.replace('/roster');
                }}
                onSwipedLeft={e => {
                  history.replace('/stats');
                }}
              >
                <Game />
              </Swipeable>
            )}
          />
          <Route
            path="/stats"
            render={({ history }) => (
              <Swipeable
                onSwipedRight={e => {
                  history.replace('/game');
                }}
              >
                <Stats />
              </Swipeable>
            )}
          />
          <Redirect to="/game" />
        </Switch>
      </Router>
    );
  }
}

export default App;
