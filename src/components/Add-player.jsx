import React, { Component } from 'react';
import { connect } from 'react-redux';

let nextPlayerId = 0;
const roster = [];

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
      <form onSubmit={this.onSubmit.bind(this)}>
        <button type="submit">+</button>

        <input
          type="text"
          placeholder="Add Player"
          onChange={this.onChange.bind(this)}
          value={this.state.nextPlayerName}
        />

        {roster.map(player => (
          <div key={player} eventKey={player}>
            {player}
          </div>
        ))}
      </form>
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
