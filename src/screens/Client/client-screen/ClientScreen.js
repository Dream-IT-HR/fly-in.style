import React, { useState } from 'react';

import Grid from '../../../_shared/components/Grid';
import Place from '../../Client/place';
import Map from '../Map/Map';

import Hambi from '.././../../screens/header/Hambi';
import Navigation from '../navigation/Navigation';

import { GoogleMapProvider } from '@googlemap-react/core';

const Client = () => {
    const [navigation, setNavigation] = useState(false);

    const handleNavigation = () => {
        setNavigation(true);
    };

    return (
        <div className="client">
            <Grid>
                <Hambi onClick={handleNavigation} />
                {navigation && <Navigation />}
                <GoogleMapProvider>
                    <Map />
                </GoogleMapProvider>
                <Place />
            </Grid>
        </div>
    );
};

export default Client;