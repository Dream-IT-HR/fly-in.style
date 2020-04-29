import React, { useState } from 'react';
import { GoogleMapProvider } from '@googlemap-react/core';

import Navigation from './components/navigation/Navigation';
import Map from './components/map/Map';
import Place from './components/place';

import Grid from '../../_shared/components/Grid';
import menuPerson from '../../_images/icons/menuPerson.svg';

const Client = () => {
    const [isNavigationVisible, setNavigationVisibility] = useState(false);

    const handleNavigation = () => {
        setNavigationVisibility(true);
    };

    return (
        <div className="client">
            <Grid>
                <div className="client__menu-icon">
                    <img src={menuPerson} alt="menu_icon" onClick={handleNavigation} />
                </div>
                {isNavigationVisible && <Navigation closeNavigation={() => setNavigationVisibility(false)} isNavigationVisible={isNavigationVisible} />}
                <GoogleMapProvider>
                    <Map />
                </GoogleMapProvider>
                <Place />
            </Grid>
        </div>
    );
};

export default Client;