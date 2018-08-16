import React from 'react';
import AddPlayer from '../components/Add-player';
import Screen from './Screen';
import { connect } from 'react-redux';

export function Roster({ players }) {
  return (
    <Screen>
      <AddPlayer />
      <ul>
        {players.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </Screen>
  );
}

const mapStateToProps = state => {
  return { players: state.players.present };
};

export default connect(mapStateToProps)(Roster);
