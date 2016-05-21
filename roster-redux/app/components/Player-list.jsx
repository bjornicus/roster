import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Player from './Player';


const PlayerList = ({ heading, players, playerFilter, onSubClick}) => (
  <div>
    <h2>{heading}</h2>
    <ul>
      {players.filter(playerFilter).map( p => <li key={p.id}><Player player={p} onSubClick={onSubClick} /></li> )}
    </ul>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return { players: state.players.present, currentTime: state.clock.currentTime};
};

const mapDispatchToProps = dispatch => {
  return {
    onSubClick: (playerId, currentTime) => dispatch({ type: 'SUB_PLAYER', playerId, currentTime }),
  };
};

function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, ownProps, {
    players: stateProps.players,
    onSubClick: (playerId) => dispatchProps.onSubClick(playerId, stateProps.currentTime)
  })
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(PlayerList)
