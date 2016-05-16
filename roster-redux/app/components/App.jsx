import React from 'react';
import PlayerList from './Player-list'

export default class App extends React.Component {
  render() {
    return (
      <div id="content">
        <PlayerList />
      </div>
    );
  }
}
