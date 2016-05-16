let nextId = 0;

function playerReducer(state, action) { 
    switch (action.type) {
        case 'ADD_PLAYER':
            return {id: nextId++, name: action.playerName, isPlaying: false};
        case 'SUB_PLAYER': 
           if (action.playerId !== state.id){
                return state;
            }
            return { ...state, isPlaying: !state.isPlaying };
        default:
            return state
    }
}

function playersReducer(state, action) {
    switch (action.type) {
        case 'ADD_PLAYER':
          return [
            ...state,
            playerReducer(undefined, action)
          ]
        case 'SUB_PLAYER':
          return state.map(p =>
            playerReducer(p, action)
          )
        default:
          return state
      }
}


export default (state = { players : []}, action) => {
    return {...state, players: playersReducer(state.players, action)}
}
