import React from 'react';
import PlayerList from './Player-list'
import AddPlayer from './Add-player'
import Undo from './Undo'
import GameClock from './Game-clock'

export default class App extends React.Component {
  render() {
    return (
      <div id="content">
        <GameClock />
        <Undo />
        <AddPlayer />
        <PlayerList heading="Playing" playerFilter={ p => p.isPlaying }/>
        <PlayerList heading="Substitutes" playerFilter={ p => !p.isPlaying }/>
      </div>
    );
  }
}
