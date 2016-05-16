import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Player from './Player';


const PlayerList = ({ players }) => (
  <div>
    <h2>Players:</h2>
    <ul>
      {players.map( p => <li><Player player={p} /></li> )}
    </ul>
  </div>
);

PlayerList.propTypes = {
  players: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return { players: state.present.players };
};

export default connect(mapStateToProps)(PlayerList)
