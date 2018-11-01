import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import HomePage from './components/HomePage';
import './App.css';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  render () {
    return (
      <Provider store = {store}>
        <HomePage />
      </Provider>
    )
  }
}

export default App; 
