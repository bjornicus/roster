import React from 'react';
import AddPlayer from '../components/Add-player';
import Screen from './Screen';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Players = styled.ul`
  overflow: scroll;
`;

export function Roster({ players }) {
  return (
    <Screen>
      <AddPlayer />
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

export default connect(mapStateToProps)(Roster);
