import React from 'react';
import AddPlayer from '../components/Add-player';
import Screen from './Screen';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Players = styled.ul`
  overflow: scroll;
`;

export function Roster({ players, addPlayer }) {
  return (
    <Screen>
      <AddPlayer onAddPlayer={addPlayer} />
      <Players>
        {players.map(p => (
          <li key={p.id}>{p.name}</li>
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
        playerName: playerName
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Roster);
