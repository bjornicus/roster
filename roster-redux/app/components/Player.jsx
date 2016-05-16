import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const BaseCounter = ({ player, onSubClick, onMinusClick }) => (
  <div>
      <button onClick={onSubClick}>SUB</button>
      {player.name} - {player.isPlaying}
  </div>
);

BaseCounter.propTypes = {
  player: PropTypes.object.isRequired,
  onSubClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    onSubClick: () => dispatch({ type: 'SUB_PLAYER', playerId: player.id }),
  };
};

export default connect(null, mapDispatchToProps)(BaseCounter)
