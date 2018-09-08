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

const Column = styled.div`
  width: 48%;
`;

const Columns = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Game({ activePlayers }) {
  let playing = activePlayers
    .filter(p => p.isPlaying)
    .sort((a, b) => a.subInTime - b.subInTime);
  let subs = activePlayers
    .filter(p => !p.isPlaying)
    .sort((a, b) => a.subOutTime - b.subOutTime);
  return (
    <Screen>
      <Header>
        <GameClock />
        <Undo />
      </Header>
      <Columns>
        <Column>
          <h1>PLAYING</h1>
          <PlayerList>
            {playing.map(p => (
              <ActivePlayer key={p.id} player={p} />
            ))}
          </PlayerList>
        </Column>
        <Column>
          <h1>SUBS</h1>{' '}
          <PlayerList>
            {subs.map(p => (
              <ActivePlayer key={p.id} player={p} />
            ))}
          </PlayerList>
        </Column>
      </Columns>
    </Screen>
  );
}

const mapStateToProps = state => {
  return { activePlayers: state.players.present.filter(p => p.isActive) };
};

export default connect(mapStateToProps)(Game);
