import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import gameClock from './game-clock';

import rootReducer from './reducers';

if (window.cordova) {
  document.addEventListener('deviceready', start, false);
} else {
  start();
}

function start() {
  const defaultState = {
    players: [],
    clock: { currentTime: 0, isRunning: false }
  };
  const middleware =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
  const store = createStore(rootReducer, defaultState, middleware);

  let clock = new gameClock();
  setInterval(function() {
    store.dispatch({ type: 'UPDATE_TIME', currentTime: clock.time() });
  }, 1000);

  let roster = JSON.parse(localStorage.getItem('roster')) || [];
  roster.forEach(playerName => {
    store.dispatch({
      type: 'ADD_PLAYER',
      playerName
    });
  });

  store.subscribe(() => {
    let state = store.getState();
    let playerNames = state.players.present.map(p => p.name);
    localStorage.setItem('roster', JSON.stringify(playerNames));
  });

  function controlClock() {
    let state = store.getState();
    // need make sure the clock has the state given by state.clock
    if (state.clock.currentTime === 0) {
      clock.reset();
    }
    if (state.clock.isRunning && !clock.isRunning()) {
      clock.start();
    } else if (!state.clock.isRunning && clock.isRunning()) {
      clock.pause();
    }
  }
  store.subscribe(controlClock);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

  // Learn more about service workers: http://bit.ly/CRA-PWA
  serviceWorker.register();
}
