import React from 'react';
import breakpoints from '../_helpers/breakpoints';
import useWindowWidth from '../_shared/hooks/useWindowWidth';

const ResponsiveImage = (props) => {
    const imageUrl = useWindowWidth() > breakpoints.mobileLandscape ? props.desktopImage : props.mobileImage;

    return (
        <div className="responsiveImage" style={{backgroundImage: `url(${imageUrl})` }}></div>
    );

};

export default ResponsiveImage;