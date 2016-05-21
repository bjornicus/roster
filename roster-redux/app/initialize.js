import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counterApp from './reducers';
import App from 'components/App';
import gameClock from './game-clock';

const defaultState = { players : [], clock : {currentTime: 0, isRunning: false} };
const store = createStore(
  counterApp, 
  module.hot && module.hot.data && module.hot.data.counter || defaultState,
  window.devToolsExtension ? window.devToolsExtension() : undefined
  );

if (module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers').default);
  });
  module.hot.accept();

  module.hot.dispose((data) => {
    data.counter = store.getState();
    [].slice.apply(document.querySelector('#app').children).forEach(function(c) { c.remove();});
  });
}

const load = () => {
  let clock = new gameClock();
  setInterval(function() {
     store.dispatch({type: 'UPDATE_TIME', currentTime: clock.time()});
  }, 1000);

  function controlClock(){
    let state = store.getState();
    // need make sure the clock has the state given by state.clock
    if (state.clock.currentTime === 0){
      clock.reset();
    }
    if (state.clock.isRunning && !clock.isRunning()){
      clock.start();
    }
    else if (!state.clock.isRunning && clock.isRunning() ){
      clock.pause();
    }
  }

  store.subscribe(controlClock);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#app')
  );
};

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}
