import React from 'react';
import AddPlayer from '../components/Add-player';
import Screen from './Screen';
import { connect } from 'react-redux';
import styled from 'styled-components';

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
`;

export function Roster({ players, addPlayer }) {
  return (
    <Screen>
      <AddPlayer onAddPlayer={addPlayer} />
      <Players>
        {players.map(p => (
          <Player key={p.id}>
            <ActiveCheckbox />
            <PlayerName>{p.name}</PlayerName>
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
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Roster);
