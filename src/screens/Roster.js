import React from 'react';
import AddPlayer from '../components/Add-player';
import Screen from './Screen';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button } from '../components/Button';

const Players = styled.ul`
  overflow: scroll;
  padding: 0;
`;

const Player = styled.ul`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  line-height: 2rem;
  border: 1px solid blue;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 0;
`;

const ActiveCheckbox = styled.input.attrs({
  type: 'checkbox'
})`
  width: 1.89rem;
  height: 1.8rem;
  margin: 0.2rem;
  vertical-align: center;
`;

const PlayerName = styled.h2`
  margin: 0.2rem;
  flex-grow: 1;
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
      <Players>
        {players.map(p => (
          <Player key={p.id}>
            <ActiveCheckbox
              onChange={() => togglePlayerActive(p.id)}
              defaultChecked={p.isActive}
            />
            <PlayerName>{p.name}</PlayerName>
            <Button color="#D81159" onClick={() => removePlayer(p.id)}>
              REMOVE
            </Button>
          </Player>
        ))}
      </Players>
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
