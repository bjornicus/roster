import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, ProgressBar, Collapse } from 'react-bootstrap';
import TimeDisplay from './Time-display';

function totalPlayingTime(player, currentTime) {
    if (player.isPlaying) {
        return player.previousPlaytime + (currentTime - player.subInTime);
    }
    return player.previousPlaytime;
}

function totalPlayingPercent(player, currentTime){
    return 100*(totalPlayingTime(player,currentTime) / currentTime);
}

function timeSinceLastSub(player, currentTime) {
    if (player.isPlaying) {
        return currentTime - player.subInTime;
    }
    return currentTime - player.subOutTime;
}

const Player = ({ player, currentTime, onSubClick, onToggleClock}) => (
  <div>
    <button type="button" className="btn btn-primary" onClick={() => onSubClick(player.id)}>SUB</button>
    <span className="player-name"> {player.name} </span>
    <ProgressBar bsStyle="success" now={totalPlayingPercent(player, currentTime)} onClick={() => onToggleClock(player.id)} />
    <Collapse in={player.showClock}>
        <div>
        <TimeDisplay time={timeSinceLastSub(player, currentTime)} />
        <TimeDisplay time={totalPlayingTime(player, currentTime)} />
        </div>
    </Collapse>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return { currentTime: state.clock.currentTime };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubClick: (playerId, currentTime) => dispatch({ type: 'SUB_PLAYER', playerId, currentTime }),
    onToggleClock: (playerId) => dispatch({ type: 'TOGGLE_CLOCK', playerId})
  };
};

function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, ownProps, {
    onSubClick: (playerId) => dispatchProps.onSubClick(playerId, stateProps.currentTime),
    onToggleClock: (playerId) => dispatchProps.onToggleClock(playerId),
    currentTime: stateProps.currentTime
  })
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Player)
