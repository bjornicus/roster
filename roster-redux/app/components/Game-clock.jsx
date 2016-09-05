import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonToolbar } from 'react-bootstrap';
import TimeDisplay from './Time-display';

const GameClock = ({ onStart, onStop, onReset, currentTime }) => {
  let input;
  return (
    <ButtonToolbar>
      <Button bsStyle="success" onClick={onStart}> Start </Button>
      <Button bsStyle="warning" onClick={onStop}> Pause </Button>
      <Button bsStyle="danger" onClick={onReset}> Reset </Button>
      <TimeDisplay time={currentTime} />
    </ButtonToolbar>
  );
}

const mapStateToProps = state => {
  return { currentTime: state.clock.currentTime };
};

const mapDispatchToProps = dispatch => {
  return {
    onStart: () => dispatch({ type: 'START_CLOCK'}),
    onStop: () => dispatch({ type: 'STOP_CLOCK'}),
    onReset: () => dispatch({ type: 'RESET_CLOCK'})
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(GameClock)
