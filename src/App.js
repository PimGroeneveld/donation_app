import React, { Component } from 'react';
import './public/css/App.css';
import './public/css/index.css';
import CharityMap from './components/map/CharityMap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import NavBar from './components/nav/NavBar.js';
import NavBarTop from './components/nav/NavBarTop';
import NavBarBottom from './components/nav/NavBarBottom';
import Footer from './components/nav/Footer';
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
