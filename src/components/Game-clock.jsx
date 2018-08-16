import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TimeDisplay from './Time-display';

const GameClock = ({ onStart, onStop, onReset, clock }) => {
  let startStopButton = clock.isRunning ? (
    <button onClick={onStop}> Pause </button>
  ) : (
    <button onClick={onStart}> Start </button>
  );

  return (
    <div>
      {startStopButton}
      <button onClick={onReset}> Reset </button>
      <TimeDisplay time={clock.currentTime} />
    </div>
  );
};

const mapStateToProps = state => {
  return { clock: state.clock };
};

const mapDispatchToProps = dispatch => {
  return {
    onStart: () => dispatch({ type: 'START_CLOCK' }),
    onStop: () => dispatch({ type: 'STOP_CLOCK' }),
    onReset: () => dispatch({ type: 'RESET_CLOCK' })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameClock);
