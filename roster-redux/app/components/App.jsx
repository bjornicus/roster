import React from 'react';
import PlayerList from './Player-list'

export default class App extends React.Component {
  render() {
    return (
      <div id="content">
        <h1>&nbsp;</h1>
        <PlayerList />
      </div>
    );
  }
}
