import undoable, { includeAction } from 'redux-undo';
import { combineReducers } from 'redux';

function playerReducer(state, action) {
  switch (action.type) {
    case 'ADD_PLAYER':
      return {
        id: state.id,
        name: action.playerName,
        isPlaying: false,
        isActive: true,
        subInTime: 0,
        subOutTime: 0,
        previousPlaytime: 0,
        goals: 0
      };
    case 'TOGGLE_PLAYER_ACTIVE':
      if (action.playerId !== state.id) {
        return state;
      }
      return { ...state, isActive: !state.isActive };
    case 'SUB_PLAYER':
      if (action.playerId !== state.id) {
        return state;
      }
      let newState = {
        isPlaying: !state.isPlaying,
        subInTime: state.subInTime,
        subOutTime: state.subOutTime,
        previousPlaytime: state.previousPlaytime
      };
      if (state.isPlaying) {
        // player is subbing out
        newState.subOutTime = action.currentTime;
        newState.previousPlaytime += action.currentTime - state.subInTime;
      } else {
        newState.subInTime = action.currentTime;
      }
      return { ...state, ...newState };
    case 'GOAL':
      if (action.playerId !== state.id) {
        return state;
      }
      return { ...state, goals: state.goals + 1 };
    case 'TOGGLE_CLOCK':
      if (action.playerId !== state.id) {
        return state;
      }
      return { ...state, showClock: !state.showClock };
    case 'RESET_CLOCK':
      return { ...state, subInTime: 0, subOutTime: 0, previousPlaytime: 0 };
    default:
      return state;
  }
}

function playersReducer(state = [], action) {
  switch (action.type) {
    case 'UPDATE_TIME':
      return state;
    case 'ADD_PLAYER':
      return [
        ...state,
        playerReducer({ id: Math.max(0, ...state.map(p => p.id)) + 1 }, action)
      ].sort((a, b) => a.name.localeCompare(b.name));

    case 'REMOVE_PLAYER':
      return state.filter(p => p.id !== action.playerId);
    default:
      return state.map(p => playerReducer(p, action));
  }
}

function clock(state = { currentTime: 0, isRunning: false }, action) {
  switch (action.type) {
    case 'UPDATE_TIME':
      return { ...state, currentTime: action.currentTime };
    case 'START_CLOCK':
      return { ...state, isRunning: true };
    case 'STOP_CLOCK':
      return { ...state, isRunning: false };
    case 'RESET_CLOCK':
      return { ...state, currentTime: 0 };
    default:
      return state;
  }
}

export let players = undoable(playersReducer, {
  limit: 10,
  filter: includeAction(['SUB_PLAYER', 'GOAL'])
});

export default combineReducers({ players, clock });
