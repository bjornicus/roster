import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, buttonHeight } from './Button';
import styled from 'styled-components';

let nextPlayerId = 0;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

const AddButton = Button.extend`
  width: ${buttonHeight};
`;

class AddPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { nextPlayerName: '' };
  }
  onChange(e) {
    this.setState({ nextPlayerName: e.target.value });
  }
  onSelect(key) {
    this.setState({ nextPlayerName: key });
  }
  onSubmit(e) {
    e.preventDefault();
    if (!this.state.nextPlayerName.trim()) {
      return;
    }
    this.props.onAddPlayer(this.state.nextPlayerName, nextPlayerId++);
    this.setState({ nextPlayerName: '' });
  }
  render() {
    return (
      <Form onSubmit={this.onSubmit.bind(this)}>
        <AddButton type="submit">+</AddButton>

        <input
          type="text"
          placeholder="Add Player"
          onChange={this.onChange.bind(this)}
          value={this.state.nextPlayerName}
        />
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return { players: state.players.present };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlayer: (playerName, playerId) =>
      dispatch({
        type: 'ADD_PLAYER',
        playerName: playerName,
        playerId: playerId
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPlayer);
