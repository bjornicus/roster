import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import formatTime from '../time-format';

const Player = ({ player, onSubClick}) => (
  <div>
    <button type="button" className="btn btn-primary" onClick={() => onSubClick(player.id)}>SUB</button>
    <span className="player-name">{player.name}</span> 
  </div>
);

Player.propTypes = {
  player: PropTypes.object.isRequired,
  onSubClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return { currentTime: state.clock.currentTime };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubClick: (playerId, currentTime) => dispatch({ type: 'SUB_PLAYER', playerId, currentTime }),
  };
};

function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, ownProps, {
    onSubClick: (playerId) => dispatchProps.onSubClick(playerId, stateProps.currentTime)
  })
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Player)
