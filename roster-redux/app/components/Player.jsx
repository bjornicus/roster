import React, { PropTypes } from 'react';

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

export default Player
