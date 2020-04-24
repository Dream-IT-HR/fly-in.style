import React, { useState } from 'react';
import { GoogleMapProvider } from '@googlemap-react/core';

import Place from '../../Client/place';
import Map from '../Map/Map';

import Grid from '../../../_shared/components/Grid';
import Navigation from '../navigation/Navigation';
import menuPerson from '../../../_images/icons/menuPerson.svg';

const Client = () => {
    const [navigation, setNavigation] = useState(false);

    const handleNavigation = () => {
        setNavigation(true);
    };

    return (
        <div className="client">
            <Grid>
                <div className="client__menu-icon">
                    <img src={menuPerson} alt="menu_icon" onClick={handleNavigation} />
                </div>
                {navigation && <Navigation closeNavigation={() => setNavigation(false)} navigation={navigation} />}
                <GoogleMapProvider>
                    <Map />
                </GoogleMapProvider>
                <Place />
            </Grid>
        </div>
    );
};

export default Client;