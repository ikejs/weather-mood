import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../../reducers'
import './App.css';

import { loadState, saveState } from '../../helpers'

const persistedState = loadState();
const store = createStore(reducers, persistedState);
store.subscribe(() => {
  saveState(store.getState());
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Weather Mood</h1>
        </div>
      </Provider>
    );
  }
}

export default App;
