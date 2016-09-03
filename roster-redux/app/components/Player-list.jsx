import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Player from './Player';
import { Label } from 'react-bootstrap';


const PlayerList = ({ heading, players, playerFilter}) => (
  <div>
    <h3><Label>{heading}</Label></h3>
    <ul className='list-group'>
      {players.filter(playerFilter).map( p => <li className='list-group-item' key={p.id}><Player player={p} /></li> )}
    </ul>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return { players: state.players.present};
};

export default connect(mapStateToProps)(PlayerList)
