import React from 'react';
import PlayerList from './Player-list';
import AddPlayer from './Add-player';
import Undo from './Undo';
import GameClock from './Game-clock';
import Screen from './Screen';

export default function() {
  return (
    <Screen>
      <PlayerList heading="Stats" playerFilter={p => p.isActive} />
    </Screen>
  );
}
