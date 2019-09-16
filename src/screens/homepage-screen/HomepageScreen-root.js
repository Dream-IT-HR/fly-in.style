import React, { lazy } from 'react';
import ResponsiveImage from '../../_shared components/ResponsiveImage';
import backgroundImageLarge from '../../_images/landingpage-background-original.png';
import backgroundImageSmall from '../../_images/landingpage-background-xs.png';

//const Header = lazy(() => import('../header/Header'));
import Header from '../header/Header';

function fHomepageRoot() {
    return (            
        <div className="homepage" >
                <div className="homepage-background">
                <Header/>
                <ResponsiveImage
                    desktopImage={backgroundImageLarge}
                    mobileImage={backgroundImageSmall}
                ></ResponsiveImage>
                </div>    
        </div>
    );
}

const HomepageRoot = React.memo(fHomepageRoot);

export default HomepageRoot ;