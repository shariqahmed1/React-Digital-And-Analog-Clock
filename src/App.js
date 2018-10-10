import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <div style={{textAlign:'center'}}>
        <br />
        <h1>Digital Clock</h1>
        <Clock />
      </div>
    );
  }
}

export default App;
