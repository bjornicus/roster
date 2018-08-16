import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TimeDisplay from './Time-display';
import { Button } from './Button';

const GameClock = ({ onStart, onStop, onReset, clock }) => {
  let startStopButton = clock.isRunning ? (
    <Button onClick={onStop}> Pause </Button>
  ) : (
    <Button onClick={onStart}> Start </Button>
  );

  return (
    <div>
      {startStopButton}
      <Button onClick={onReset}> Reset </Button>
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
