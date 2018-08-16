import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { HashRouter as Router } from 'react-router-dom';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default App;
