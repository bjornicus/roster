import React from 'react';
import PlayerList from '../components/Player-list';
import Undo from '../components/Undo';
import GameClock from '../components/Game-clock';
import Screen from './Screen';

export default function() {
  return (
    <Screen>
      <GameClock />
      <Undo />
      <PlayerList heading="Playing" playerFilter={p => p.isPlaying} />
      <PlayerList heading="Substitutes" playerFilter={p => !p.isPlaying} />
    </Screen>
  );
}
