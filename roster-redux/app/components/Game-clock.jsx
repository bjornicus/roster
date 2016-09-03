import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Label, Button, ButtonToolbar } from 'react-bootstrap';
import formatTime from '../time-format';

const GameClock = ({ onStart, onStop, onReset, currentTime }) => {
  let input;
  return (
    <ButtonToolbar>
      <Button bsStyle="success" onClick={onStart}> Start </Button>
      <Button bsStyle="warning" onClick={onStop}> Pause </Button>
      <Button bsStyle="danger" onClick={onReset}> Reset </Button>
      <Label className='clock'>{formatTime(currentTime)}</Label>
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
