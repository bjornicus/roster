import { PlayerList, Player, PlayerName } from '../components/PlayerList';

import React from 'react';
import AddPlayer from '../components/Add-player';
import Screen from './Screen';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button } from '../components/Button';

const ActiveCheckbox = styled.input.attrs({
  type: 'checkbox'
})`
  width: 1.89rem;
  height: 1.8rem;
  margin: 0.2rem;
  vertical-align: center;
  border-radius: 50px;
`;

const RemoveButton = styled(Button)`
  color: #000;
  background-color: yellow;
`;

export function Roster({
  players,
  addPlayer,
  removePlayer,
  togglePlayerActive
}) {
  return (
    <Screen>
      <AddPlayer onAddPlayer={addPlayer} />
      <PlayerList>
        {players.map(p => (
          <Player key={p.id}>
            <ActiveCheckbox
              onChange={() => togglePlayerActive(p.id)}
              defaultChecked={p.isActive}
            />
            <PlayerName>{p.name}</PlayerName>
            <RemoveButton onClick={() => removePlayer(p.id)}>
              REMOVE
            </RemoveButton>
          </Player>
        ))}
      </PlayerList>
    </Screen>
  );
}

const mapStateToProps = state => {
  return { players: state.players.present };
};

const mapDispatchToProps = dispatch => {
  return {
    addPlayer: playerName =>
      dispatch({
        type: 'ADD_PLAYER',
        playerName
      }),
    removePlayer: id =>
      dispatch({
        type: 'REMOVE_PLAYER',
        playerId: id
      }),
    togglePlayerActive: id =>
      dispatch({
        type: 'TOGGLE_PLAYER_ACTIVE',
        playerId: id
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Roster);
