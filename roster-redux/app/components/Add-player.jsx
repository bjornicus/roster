import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, InputGroup, FormGroup, FormControl } from 'react-bootstrap';

let nextPlayerId = 0;

const AddPlayer = ({ players, onAddPlayer }) => {
  let text = '';
  function onChange(e) {  
    const newText = e.target.value;  
    text = newText;  
  }

  function onSubmit(e){
    e.preventDefault()
    const playerName = this.refs.playerName.value;
    if (!playerName.trim()) {
      return
    }
    onAddPlayer(playerName, nextPlayerId++)
    text = '';
  }

  function getText(){ return text;}

  return (
    <form onSubmit={onSubmit}>
      <FormGroup>
        <InputGroup>
          <InputGroup.Button>
            <Button type="submit">+</Button>
          </InputGroup.Button>
          <FormControl type="text" placeholder="Add Player" onChange={onChange} value={getText} />
        </InputGroup>
      </FormGroup>
    </form>
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
