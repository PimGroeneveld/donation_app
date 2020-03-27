import React, { Component } from 'react';
import './public/css/App.css';
import './public/css/index.css';
import NavBar from './components/nav/NavBar.js';
import logo from './logo.svg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <NavBar />

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Just some text here about the greatest app to ever be created
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            </a>
        </header>
      </div>
    );
  
  }
}

export default App;
