import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Player from './Player';


const PlayerList = ({ heading, players, playerFilter, onSubClick }) => (
  <div>
    <h2>{heading}</h2>
    <ul>
      {players.filter(playerFilter).map( p => <Player key={p.id} player={p} onSubClick={onSubClick} /> )}
    </ul>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return { players: state.present.players };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubClick: (playerId) => dispatch({ type: 'SUB_PLAYER', playerId: playerId }),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(PlayerList)
