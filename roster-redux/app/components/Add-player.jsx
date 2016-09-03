import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, InputGroup, FormGroup, FormControl } from 'react-bootstrap';

let nextPlayerId = 0;

class AddPlayer extends Component {  
  constructor(props) {
    super(props);
    this.state = {nextPlayerName: ''};
  }
  onChange(e) {  
    this.setState({ nextPlayerName: e.target.value });
  }
  onSubmit(e){
    e.preventDefault()
    if (!this.state.nextPlayerName.trim()) {
      return
    }
    this.props.onAddPlayer(this.state.nextPlayerName, nextPlayerId++)
    this.setState({ nextPlayerName: '' });
  }
  render() {  
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <FormGroup>
          <InputGroup>
            <InputGroup.Button>
              <Button type="submit">+</Button>
            </InputGroup.Button>
            <FormControl type="text" placeholder="Add Player" onChange={this.onChange.bind(this)} value={this.state.nextPlayerName} />
          </InputGroup>
        </FormGroup>
      </form>
    ); 
  }  
} 

// const AddPlayer = ({ players, onAddPlayer }) => {
//   function onChange(e) {  
//     nextPlayerName = e.target.value;
//   }

//   function onSubmit(e){
//     e.preventDefault()
//     if (!nextPlayerName.trim()) {
//       return
//     }
//     onAddPlayer(nextPlayerName, nextPlayerId++)
//     nextPlayerName = '';
//   }

//   return (
//     <form onSubmit={onSubmit}>
//       <FormGroup>
//         <InputGroup>
//           <InputGroup.Button>
//             <Button type="submit">+</Button>
//           </InputGroup.Button>
//           <FormControl type="text" placeholder="Add Player" onChange={onChange} />
//         </InputGroup>
//       </FormGroup>
//     </form>
//   );
// }

const mapStateToProps = state => {
  return { players: state.players.present };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlayer: (playerName, playerId) => dispatch({ type: 'ADD_PLAYER', playerName: playerName, playerId: playerId}),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(AddPlayer)
