import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Screen from './Screen';
import GameClock from '../components/Game-clock';
import Undo from '../components/Undo';

import { PlayerList } from '../components/PlayerList';
import ActivePlayer from '../components/ActivePlayer';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Game({ activePlayers }) {
  let playing = activePlayers.filter(p => p.isPlaying);
  let subs = activePlayers.filter(p => !p.isPlaying);
  return (
    <Screen>
      <Header>
        <GameClock />
        <Undo />
      </Header>
      <h1>PLAYING</h1>
      <PlayerList>
        {playing.map(p => (
          <ActivePlayer key={p.id} player={p} />
        ))}
      </PlayerList>
      <h1>SUBS</h1>{' '}
      <PlayerList>
        {subs.map(p => (
          <ActivePlayer key={p.id} player={p} />
        ))}
      </PlayerList>
    </Screen>
  );
}

const mapStateToProps = state => {
  return { activePlayers: state.players.present.filter(p => p.isActive) };
};

export default connect(mapStateToProps)(Game);
