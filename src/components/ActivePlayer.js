import React from 'react';
// import styled from 'styled-components';
import { connect } from 'react-redux';
import TimeDisplay from './Time-display';
import { Button } from './Button';
import { PlayerName, Player } from './PlayerList';

function timeSinceLastSub(player, currentTime) {
  if (player.isPlaying) {
    return currentTime - player.subInTime;
  }
  return currentTime - player.subOutTime;
}

const ActivePlayer = ({ player, currentTime, onSubClick }) => (
  <Player>
    <Button onClick={() => onSubClick(player.id)}>SUB</Button>

    <PlayerName> {player.name} </PlayerName>
    <div>
      <TimeDisplay
        clockStyle="last-sub"
        time={timeSinceLastSub(player, currentTime)}
      />
    </div>
  </Player>
);

const mapStateToProps = state => {
  return { currentTime: state.clock.currentTime };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubClick: (playerId, currentTime) =>
      dispatch({ type: 'SUB_PLAYER', playerId, currentTime })
  };
};

function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, ownProps, {
    onSubClick: playerId =>
      dispatchProps.onSubClick(playerId, stateProps.currentTime),
    currentTime: stateProps.currentTime
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ActivePlayer);
