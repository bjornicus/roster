import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

function pad(num, size) {
    let s = "0000" + num;
    return s.substr(s.length - size);
}
function formatTime(time) {
    let m = 0, s = 0;
    let newTime = '';

    m = Math.floor( time / 60 );
    time = time % 60;
    s = Math.floor( time );

    newTime = pad(m, 2) + ':' + pad(s, 2);
    return newTime;
}

const GameClock = ({ onStart, onStop, onReset, currentTime }) => {
  let input;
  return (
    <div>
        <button onClick={onStart}> Start </button>
        <button onClick={onStop}> Pause </button>
        <button onClick={onReset}> Reset </button>
        <span className='clock'>{formatTime(currentTime)}</span>
    </div>
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
