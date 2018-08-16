import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { HashRouter as Router } from 'react-router-dom';
import Game from './components/Game';
import Stats from './components/Stats';
import Roster from './components/Roster';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/stats" component={Stats} />
          <Route path="/roster" component={Roster} />
          <Route component={Game} />
        </Switch>
      </Router>
    );
  }
}

export default App;
