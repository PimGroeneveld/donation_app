import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapContainer from './views/charity_map_view';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <Router>
            <div class="topnav">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/map">Near me</Link>
                </li>
              </ul>
              <hr />
              <Route exact path="/map" component={MapContainer} />

              <a
                onClick={() => {
                  window.location.href = 'charity_map_view.js';
                }}
              >
                Go to maps
              </a>
            </div>
          </Router>

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
