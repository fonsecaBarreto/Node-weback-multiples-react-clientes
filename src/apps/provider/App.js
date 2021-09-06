import React, { Component } from 'react';
import './app.css';
import Routes from './pages/routes'

export default class App extends Component {


  render() {
  
    return (
      <div>
          <h1> Olá sou  a pagina do Fornecedor </h1>

          <Routes></Routes>  
      </div>
    );
  }
}
