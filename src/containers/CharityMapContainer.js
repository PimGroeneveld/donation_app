import React, { Component } from 'react';
import { MapContainer } from '../components/map/MapContainer.js';
import NavBar from '../components/nav/NavBar.js';

class CharityMapContainer extends Component{
    render(){
        return(
            <div>
                <header> 
                    {/* This somehow makes the loading infinite, works when link directly shows map */}
                    {/* <NavBar /> */}

                    <MapContainer />
                </header>
            </div>
        )
    }

}

export default CharityMapContainer;