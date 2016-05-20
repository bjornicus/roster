import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import undoable, { includeAction, excludeAction } from 'redux-undo';
import counterApp from './reducers';
import App from 'components/App';
import gameClock from './game-clock';

const defaultState = { players : [], currentTime: 0 };
const store = createStore(
  undoable(counterApp, { filter: excludeAction('UPDATE_TIME') }), 
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
  clock.start();
  setInterval(function() {
    store.dispatch({type: 'UPDATE_TIME', currentTime: clock.time()});
  }, 1000);

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
