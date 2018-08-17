import React from 'react';
import Screen from './Screen';
import { connect } from 'react-redux';

import { PlayerList } from '../components/PlayerList';
import ActivePlayer from '../components/ActivePlayer';

function Stats({ activePlayers }) {
  return (
    <Screen>
      {' '}
      <PlayerList>
        {activePlayers.map(p => (
          <ActivePlayer key={p.id} player={p} />
        ))}
      </PlayerList>
    </Screen>
  );
}

const mapStateToProps = state => {
  return { activePlayers: state.players.present.filter(p => p.isActive) };
};

export default connect(mapStateToProps)(Stats);
