import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Students from './Students';
import Teachers from './Teachers';
import Courses from './Courses';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <div className="content">
      <Students />
      <Teachers />
      <Courses />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
      </div>
    );
  }
}

export default App;
