import React from 'react';
import Screen from './Screen';
import { connect } from 'react-redux';

import Undo from '../components/Undo';
import { PlayerList } from '../components/PlayerList';
import PlayerStats from '../components/PlayerStats';
import { totalPlayingTime } from '../components/PlayerStats';

function Stats({ activePlayers, currentTime }) {
  activePlayers.sort((a, b) => {
    return totalPlayingTime(a, currentTime) - totalPlayingTime(b, currentTime);
  });
  return (
    <Screen>
      <Undo />
      <PlayerList>
        {activePlayers.map(p => (
          <PlayerStats key={p.id} player={p} />
        ))}
      </PlayerList>
    </Screen>
  );
}

const mapStateToProps = state => {
  return {
    activePlayers: state.players.present.filter(p => p.isActive),
    currentTime: state.clock.currentTime
  };
};

export default connect(mapStateToProps)(Stats);
