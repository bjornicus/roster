import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const BaseCounter = ({ player, onPlusClick, onMinusClick }) => (
  <div>
    <h2>Player:</h2>
    <p>
      <button onClick={onMinusClick}>-</button>
      {player.name}
      <button onClick={onPlusClick}>+</button>
    </p>
  </div>
);

BaseCounter.propTypes = {
  player: PropTypes.object.isRequired,
  onPlusClick: PropTypes.func.isRequired,
  onMinusClick: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onPlusClick: () => dispatch({ type: 'INCREMENT' }),
    onMinusClick: () => dispatch({ type: 'DECREMENT' })
  };
};

export default connect(null, mapDispatchToProps)(BaseCounter)
