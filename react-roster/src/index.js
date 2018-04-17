import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counterApp from './reducers';
import gameClock from './game-clock';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


const defaultState = { players: [], clock: { currentTime: 0, isRunning: false } };
const store = createStore(
  counterApp,
  defaultState,
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

const load = () => {
  let clock = new gameClock();
  setInterval(function () {
    store.dispatch({ type: 'UPDATE_TIME', currentTime: clock.time() });
  }, 1000);

  function controlClock() {
    let state = store.getState();
    // need make sure the clock has the state given by state.clock
    if (state.clock.currentTime === 0) {
      clock.reset();
    }
    if (state.clock.isRunning && !clock.isRunning()) {
      clock.start();
    }
    else if (!state.clock.isRunning && clock.isRunning()) {
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
};

load();
registerServiceWorker();
