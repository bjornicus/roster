import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Player from './Player';


const PlayerList = ({ heading, players, playerFilter, onSubClick }) => (
  <div>
    <h2>{heading}</h2>
    <ul>
      {players.filter(playerFilter).map( p => <li key={p.id}><Player player={p} onSubClick={onSubClick} /></li> )}
    </ul>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return { players: state.players.present };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubClick: (playerId) => dispatch({ type: 'SUB_PLAYER', playerId: playerId }),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(PlayerList)
