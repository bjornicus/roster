import React from 'react';
import PlayerList from './Player-list';
import AddPlayer from './Add-player';
import Undo from './Undo';
import GameClock from './Game-clock';
import Screen from './Screen';

export default function() {
  return (
    <Screen>
      <AddPlayer />
      <PlayerList heading="All Players" playerFilter={p => true} />
    </Screen>
  );
}
