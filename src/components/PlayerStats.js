import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import TimeDisplay from './Time-display';
import { Button } from './Button';
import { PlayerName, Player } from './PlayerList';

const GoalCounter = styled(Button)`
  background-color: darkorchid;
`;

const ProgressBar = styled.progress`
  direction: rtl;
  height: 20px;
  margin-right: 0.3rem;
  -webkit-appearance: none;
  &::-webkit-progress-bar {
    background-color: #eee;
    border-radius: 2px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  }
  &::-webkit-progress-value {
    /* background-image: -webkit-linear-gradient(
        -45deg,
        transparent 33%,
        rgba(0, 0, 0, 0.1) 33%,
        rgba(0, 0, 0, 0.1) 66%,
        transparent 66%
      ),
      -webkit-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.25)),
      -webkit-linear-gradient(left, #09c, #f44); */

    background-color: darkorchid;
    border-radius: 2px;
    background-size: 35px 20px, 100% 100%, 100% 100%;
  }
`;

export function totalPlayingTime(player, currentTime) {
  if (player.isPlaying) {
    return player.previousPlaytime + (currentTime - player.subInTime);
  }
  return player.previousPlaytime;
}

const PlayerStats = ({ player, currentTime, onGoalScored }) => (
  <Player>
    <GoalCounter onClick={() => onGoalScored(player.id)}>
      {' '}
      {player.goals}{' '}
    </GoalCounter>
    <PlayerName> {player.name} </PlayerName>

    <ProgressBar
      max={Math.max(currentTime, 50 * 60)}
      value={totalPlayingTime(player, currentTime)}
    />
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
