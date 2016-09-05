import undoable, { includeAction, excludeAction }from 'redux-undo';
import { combineReducers } from 'redux'

function playerReducer(state, action) { 
    switch (action.type) {
        case 'ADD_PLAYER':
            return {id: action.playerId, name: action.playerName, isPlaying: false, subInTime: 0, subOutTime: 0, previousPlaytime: 0};
        case 'SUB_PLAYER': 
           if (action.playerId !== state.id){
                return state;
            }
            let newState = {
                isPlaying: !state.isPlaying,
                subInTime : state.subInTime,
                subOutTime : state.subOutTime,
                previousPlaytime : state.previousPlaytime
            }
            if (state.isPlaying) { // player is subbing out
                newState.subOutTime = action.currentTime;
                newState.previousPlaytime += action.currentTime - state.subInTime;
            }
            else {
                newState.subInTime = action.currentTime;
            }
            return { ...state, ...newState };
        case 'TOGGLE_CLOCK' : 
           if (action.playerId !== state.id){
                return state;
            }
            return {...state, showClock: !state.showClock};
        case 'RESET_CLOCK' :
            return { ...state, subInTime: 0, subOutTime: 0, previousPlaytime: 0};
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

players = undoable(players, {
    limit: 10, // set a limit for the history
    filter: includeAction(['SUB_PLAYER', 'ADD_PLAYER']),
  });

export default combineReducers({players, clock});
