import React, { Component } from 'react';
import { Button, buttonHeight } from './Button';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

const AddButton = Button.extend`
  width: ${buttonHeight};
`;

const NameField = styled.input`
  flex-grow: 1;
`;

export default class AddPlayer extends Component {
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
    this.props.onAddPlayer(this.state.nextPlayerName);
    this.setState({ nextPlayerName: '' });
  }
  render() {
    return (
      <Form onSubmit={this.onSubmit.bind(this)}>
        <AddButton type="submit">+</AddButton>

        <NameField
          type="text"
          placeholder="Add Player"
          onChange={this.onChange.bind(this)}
          value={this.state.nextPlayerName}
        />
      </Form>
    );
  }
}
