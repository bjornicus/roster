export default (state = { players : [{name: 'alice'}, {name: 'bob'} ]}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state; //{...state, {players: state.players.concat([{name: 'steve'}])}};
    case 'DECREMENT':
      return state;//- 1;
    default:
      return state
  }
}
