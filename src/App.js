import React from 'react';
import { MainView } from './components/main-view/main-view.jsx';
import './App.scss';

import { devToolsEnhancer } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import anonymousApp from './reducers/reducers';

const store = createStore(anonymousApp, devToolsEnhancer());

export class App extends React.Component {
    render() {
      return (
        <Provider store={store}>
        <div className="anonymousCollection">
          <MainView />
        </div>
        </Provider>
      );
    }
  }