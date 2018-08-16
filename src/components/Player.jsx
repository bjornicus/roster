import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TimeDisplay from './Time-display';

function totalPlayingTime(player, currentTime) {
  if (player.isPlaying) {
    return player.previousPlaytime + (currentTime - player.subInTime);
  }
  return player.previousPlaytime;
}

function totalPlayingPercent(player, currentTime) {
  return 100 * (totalPlayingTime(player, currentTime) / currentTime);
}

function timeSinceLastSub(player, currentTime) {
  if (player.isPlaying) {
    return currentTime - player.subInTime;
  }
  return currentTime - player.subOutTime;
}

const Player = ({
  player,
  currentTime,
  onSubClick,
  onGoalScored,
  onToggleClock
}) => (
  <div>
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => onSubClick(player.id)}
    >
      SUB
    </button>

    <span className="player-name"> {player.name} </span>

    <button
      type="button"
      className="btn"
      onClick={() => onGoalScored(player.id)}
    >
      {' '}
      {player.goals}{' '}
    </button>

    {/* <ProgressBar
          bsStyle="success"
          now={totalPlayingPercent(player, currentTime)}
          onClick={() => onToggleClock(player.id)}
        /> */}
    <div>
      <TimeDisplay
        clockStyle="last-sub"
        time={timeSinceLastSub(player, currentTime)}
      />
      <TimeDisplay
        clockStyle="total-played"
        time={totalPlayingTime(player, currentTime)}
      />
    </div>
  </div>
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
)(Player);
