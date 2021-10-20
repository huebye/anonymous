import React from 'react';
import { MainView } from './components/main-view/main-view.jsx';
import './App.scss';

export class App extends React.Component {
    render() {
      return (
        <div className="anonymousCollection">
          <MainView />
        </div> 
      );
    }
  }