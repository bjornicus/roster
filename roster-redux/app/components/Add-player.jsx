import React, { PropTypes } from 'react';
import { connect } from 'react-redux';


const PlayerList = ({ players, onAddPlayer }) => {
  let input;
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        onAddPlayer(input.value)
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Player
        </button>
      </form>
    </div>
  );
}

PlayerList.propTypes = {
  players: PropTypes.object.isRequired,
  onAddPlayer: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { players: state.present.players };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlayer: (playerName) => dispatch({ type: 'ADD_PLAYER', playerName: playerName }),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(PlayerList)
