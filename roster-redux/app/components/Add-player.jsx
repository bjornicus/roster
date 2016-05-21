import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

let nextPlayerId = 0;

const AddPlayer = ({ players, onAddPlayer }) => {
  let input;
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        onAddPlayer(input.value, nextPlayerId++)
        input.value = ''
      }}>
        <button type="submit">
          &nbsp;+&nbsp; 
        </button>
        <input ref={node => {
          input = node
        }} />
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return { players: state.players.present };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlayer: (playerName, playerId) => dispatch({ type: 'ADD_PLAYER', playerName: playerName, playerId: playerId}),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(AddPlayer)
