import React, { Component } from 'react';
import '../../assets/styles/root.css'
import '../../assets/styles/fonts.css'
import './app.css'
import Routes from './routes'
import { PROVIDERS_PAGES, PAGES_STRUCT } from './pagesManifest'

export default class App extends Component {
  render() {
    return (
      <div className="App">
          <Routes pages={PROVIDERS_PAGES} struct={PAGES_STRUCT}></Routes>  
      </div>
    );
  }
}
