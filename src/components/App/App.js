import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../../reducers'
import './bootstrap.min.css';
import './App.css';

import { loadState, saveState } from '../../helpers'

import MoodNew from '../mood-new/mood-new'
import MoodList from '../mood-list'

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
          <MoodNew />
          <MoodList />
        </div>
      </Provider>
    );
  }
}

export default App;
