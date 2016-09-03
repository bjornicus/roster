import undoable from 'redux-undo';
import { combineReducers } from 'redux'

function playerReducer(state, action) { 
    switch (action.type) {
        case 'ADD_PLAYER':
            return {id: action.playerId, name: action.playerName, isPlaying: false, lastSubTime: 0, totalPlayingTime: 0};
        case 'SUB_PLAYER': 
           if (action.playerId !== state.id){
                return state;
            }
            return { ...state, isPlaying: !state.isPlaying, lastSubTime: action.currentTime };
        case 'RESET_PLAYTIME' :
            return { ...state, lastSubTime: 0, totalPlayingTime: 0};
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
        default:
          return state.map(p =>
            playerReducer(p, action)
          )
      }
}

function clock(state = { currentTime: 0, isRunning: false }, action) {
    switch (action.type) {
        case 'UPDATE_TIME':
            return {...state, currentTime: action.currentTime}
        case 'START_CLOCK':
            return {...state, isRunning: true}
        case 'STOP_CLOCK':
            return {...state, isRunning: false}
        case 'RESET_CLOCK':
            return {...state, currentTime: 0 }
    }
    return state;
}

players = undoable(players);

export default combineReducers({players, clock});
