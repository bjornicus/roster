import React from 'react';
import PlayerList from './Player-list';
import Screen from './Screen';

export default function() {
  return (
    <Screen>
      <PlayerList heading="Stats" playerFilter={p => p.isActive} />
    </Screen>
  );
}
