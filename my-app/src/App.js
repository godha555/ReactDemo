import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DemoComponent from './DemoComponent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hi, this is <i> Lakshmi </i> </h1>
          <h4> Welcome to demo class</h4>
        </header>
        
        <p className="App-intro">
          Contacts
        </p>
        <div class="container">
          <div class="contact">
          <DemoComponent value="John" phone="+1 343565123" value1="c1"></DemoComponent>
          <DemoComponent value="Paul" phone="+1 456566243" value1="c2"></DemoComponent>
          <DemoComponent value="Joe" phone="+1 5656546523" value1="c3"></DemoComponent>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
