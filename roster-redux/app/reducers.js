import { combineReducers } from 'redux'

function playerReducer(state, action) { 
    switch (action.type) {
        case 'ADD_PLAYER':
            return {id: action.playerId, name: action.playerName, isPlaying: false};
        case 'SUB_PLAYER': 
           if (action.playerId !== state.id){
                return state;
            }
            return { ...state, isPlaying: !state.isPlaying };
        default:
            return state
    }
}

function players(state = [], action) {
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

function currentTime(state = 0, action) {
    if (action.type == 'UPDATE_TIME'){
        return action.currentTime;
    }
    return state;
}

export default combineReducers({players, currentTime});
