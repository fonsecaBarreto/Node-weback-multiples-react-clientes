import React, { Component } from 'react';

import '../../assets/styles/root.css'
import '../../assets/styles/fonts.css'
import './app.css'
import Routes from './pages/routes'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes></Routes>  
      </div>
    );
  }
}
