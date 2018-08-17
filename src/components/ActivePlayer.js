import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import TimeDisplay from './Time-display';
import { Button } from './Button';
import { PlayerName, Player } from './PlayerList';

function totalPlayingTime(player, currentTime) {
  if (player.isPlaying) {
    return player.previousPlaytime + (currentTime - player.subInTime);
  }
  return player.previousPlaytime;
}

// function totalPlayingPercent(player, currentTime) {
//   return 100 * (totalPlayingTime(player, currentTime) / currentTime);
// }

function timeSinceLastSub(player, currentTime) {
  if (player.isPlaying) {
    return currentTime - player.subInTime;
  }
  return currentTime - player.subOutTime;
}

const ActivePlayer = ({
  player,
  currentTime,
  onSubClick,
  onGoalScored,
  onToggleClock
}) => (
  <Player>
    <Button onClick={() => onSubClick(player.id)}>SUB</Button>

    <PlayerName> {player.name} </PlayerName>

    {/* <Button onClick={() => onGoalScored(player.id)}> {player.goals} </Button> */}

    {/* <ProgressBar
          now={totalPlayingPercent(player, currentTime)}
          onClick={() => onToggleClock(player.id)}
        /> */}
    <div>
      <TimeDisplay
        clockStyle="last-sub"
        time={timeSinceLastSub(player, currentTime)}
      />
      {/* <TimeDisplay
        clockStyle="total-played"
        time={totalPlayingTime(player, currentTime)}
      /> */}
    </div>
  </Player>
);

const mapStateToProps = (state, ownProps) => {
  return { currentTime: state.clock.currentTime };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubClick: (playerId, currentTime) =>
      dispatch({ type: 'SUB_PLAYER', playerId, currentTime }),
    onGoalScored: playerId => dispatch({ type: 'GOAL', playerId }),
    onToggleClock: playerId => dispatch({ type: 'TOGGLE_CLOCK', playerId })
  };
};

function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, ownProps, {
    onSubClick: playerId =>
      dispatchProps.onSubClick(playerId, stateProps.currentTime),
    onGoalScored: playerId => dispatchProps.onGoalScored(playerId),
    onToggleClock: playerId => dispatchProps.onToggleClock(playerId),
    currentTime: stateProps.currentTime
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ActivePlayer);
