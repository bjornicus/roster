import React from 'react';
import PlayerList from './Player-list';
import AddPlayer from './Add-player';
import Undo from './Undo';
import GameClock from './Game-clock';

export default function() {
  return (
    <div>
      <PlayerList heading="Stats" playerFilter={p => p.isActive} />
    </div>
  );
}
