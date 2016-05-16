import React, { PropTypes } from 'react';

const Player = ({ player, onSubClick}) => (
  <div>
      <button onClick={() => onSubClick(player.id)}>SUB</button>
      {player.name} - {player.isPlaying ? 'playing': 'not playing' }
  </div>
);

Player.propTypes = {
  player: PropTypes.object.isRequired,
  onSubClick: PropTypes.func.isRequired,
};

export default Player
