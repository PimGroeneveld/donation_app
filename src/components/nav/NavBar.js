import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import MapContainer from '../map/MapContainer.js';
import InfoContainer from '../../containers/InfoContainer.js';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleNightmode(event){
        document.body.classList.toggle('nightmode');
    }

    render() {
        return (
            <Router>
                <Route path='/map' component={MapContainer} />
                <Route path='/info' component={InfoContainer} />
            <header>
                <ul>
                    <li>
                        <Link className="categories-navbar" to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link className="categories-navbar" to={"/map"} >Show map</Link>
                    </li>
                    <li>
                        <Link className="categories-navbar" to={"/info"} >Types of donations</Link>
                    </li>
                </ul>
                <button className= "nightmode-button" data-switch-contrast aria-hidden onClick = {this.handleNightmode}>Night mode</button>
            </header>
            </Router>
        )
    }
}

export default NavBar;
