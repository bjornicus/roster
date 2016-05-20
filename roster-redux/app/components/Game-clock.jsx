import React, { PropTypes } from 'react';
import { connect } from 'react-redux';


const GameClock = ({ onStart, onStop, onReset, currentTime }) => {
  let input;
  return (
    <div>
        <button onClick={onStart}> Start </button>
        <button onClick={onStop}> Pause </button>
        <button onClick={onReset}> Reset </button>
        {currentTime}
    </div>
  );
}

const mapStateToProps = state => {
  return { currentTime: state.present.currentTime };
};

const mapDispatchToProps = dispatch => {
  return {
    onStart: () => dispatch({ type: 'START_CLOCK'}),
    onStop: () => dispatch({ type: 'STOP_CLOCK'}),
    onReset: () => dispatch({ type: 'RESET_CLOCK'})
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(GameClock)
