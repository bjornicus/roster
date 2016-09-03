import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import formatTime from '../time-format';

function totalPlayingTime(player, currentTime) {
    if (player.isPlaying) {
        return player.previousPlaytime + (currentTime - player.subInTime);
    }
    return player.previousPlaytime;
}

function timeSinceLastSub(player, currentTime) {
    if (player.isPlaying) {
        return currentTime - player.subInTime;
    }
    return currentTime - player.subOutTime;
}

const Player = ({ player, currentTime, onSubClick}) => (
  <div>
    <button type="button" className="btn btn-primary" onClick={() => onSubClick(player.id)}>SUB</button>
    <span className="player-name">{player.name} - {formatTime(timeSinceLastSub(player, currentTime))}- {formatTime(totalPlayingTime(player, currentTime))}</span> 
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return { currentTime: state.clock.currentTime };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubClick: (playerId, currentTime) => dispatch({ type: 'SUB_PLAYER', playerId, currentTime }),
  };
};

function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, ownProps, {
    onSubClick: (playerId) => dispatchProps.onSubClick(playerId, stateProps.currentTime),
    currentTime: stateProps.currentTime
  })
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Player)
