import React from 'react';
import PlayerList from './Player-list';
import AddPlayer from './Add-player';
import Undo from './Undo';
import GameClock from './Game-clock';

export default function() {
  return (
    <div>
      <GameClock />
      <Undo />
      <PlayerList heading="Playing" playerFilter={p => p.isPlaying} />
      <PlayerList heading="Substitutes" playerFilter={p => !p.isPlaying} />
    </div>
  );
}
