import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import TimeDisplay from './Time-display';
import { Button } from './Button';
import { PlayerName, Player } from './PlayerList';

export function totalPlayingTime(player, currentTime) {
  if (player.isPlaying) {
    return player.previousPlaytime + (currentTime - player.subInTime);
  }
  return player.previousPlaytime;
}

// function totalPlayingPercent(player, currentTime) {
//   return 100 * (totalPlayingTime(player, currentTime) / currentTime);
// }

const PlayerStats = ({ player, currentTime, onGoalScored }) => (
  <Player>
    <Button onClick={() => onGoalScored(player.id)}> {player.goals} </Button>
    <PlayerName> {player.name} </PlayerName>

    {/* <ProgressBar
          now={totalPlayingPercent(player, currentTime)}
          onClick={() => onToggleClock(player.id)}
        /> */}
    <TimeDisplay
      clockStyle="total-played"
      time={totalPlayingTime(player, currentTime)}
    />
  </Player>
);

const mapStateToProps = state => {
  return { currentTime: state.clock.currentTime };
};

const mapDispatchToProps = dispatch => {
  return {
    onGoalScored: playerId => dispatch({ type: 'GOAL', playerId })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerStats);
