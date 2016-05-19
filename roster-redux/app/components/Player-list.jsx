import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Player from './Player';


const PlayerList = ({ players, onSubClick }) => (
  <div>
    <h2>Players:</h2>
    <ul>
      {players.map( p => <li><Player key={p.id} player={p} onSubClick={onSubClick} /></li> )}
    </ul>
  </div>
);

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  onSubClick: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { players: state.present.players };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubClick: (playerId) => dispatch({ type: 'SUB_PLAYER', playerId: playerId }),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(PlayerList)
