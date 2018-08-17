import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Screen from './Screen';
import GameClock from '../components/Game-clock';
import Undo from '../components/Undo';

import { PlayerList, Player, PlayerName } from '../components/PlayerList';
import ActivePlayer from '../components/ActivePlayer';
import { Button } from '../components/Button';

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
          <Player key={p.id}>
            <ActivePlayer player={p} />
          </Player>
        ))}
      </PlayerList>
      <h1>SUBS</h1>{' '}
      <PlayerList>
        {subs.map(p => (
          <Player key={p.id}>
            <ActivePlayer player={p} />
          </Player>
        ))}
      </PlayerList>
    </Screen>
  );
}

const mapStateToProps = state => {
  return { activePlayers: state.players.present.filter(p => p.isActive) };
};

export default connect(mapStateToProps)(Game);
