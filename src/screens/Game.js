import React from 'react';
import PlayerList from '../components/Player-list';
import Undo from '../components/Undo';
import GameClock from '../components/Game-clock';
import Screen from './Screen';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function() {
  return (
    <Screen>
      <Header>
        <GameClock />
        <Undo />
      </Header>
      <PlayerList heading="Playing" playerFilter={p => p.isPlaying} />
      <PlayerList heading="Substitutes" playerFilter={p => !p.isPlaying} />
    </Screen>
  );
}
