let nextId = 0;

function playerReducer(state, action) {
    switch (actio.type) {
        case 'ADD_PLAYER':
            return {id: nextId++, name: action.playerName, isPlaying: false};
        case 'SUB_PLAYER': 
            return Object.apply({}, state, {isPlaying: !state.isPlaying});
        default:
            return state
    }
}


export default (state = { players : []}, action) => {
  switch (action.type) {
    case 'SUB':
      return state; //{...state, {players: state.players.concat([{name: 'steve'}])}};
    default:
      return state
  }
}
