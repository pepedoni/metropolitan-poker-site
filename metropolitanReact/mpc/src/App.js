import React, { Component } from 'react';
import logo from './mpc.png';
import './App.css';
import FormMPC from './components/FormMPC';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Metropolitan Ranking</h1>
        </header>
        <FormMPC/>
      </div>
      
    );
  }
}

export default App;
