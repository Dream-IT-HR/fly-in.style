import Header from '../header/Header';
import React, { Component } from 'react';
import ResponsiveImage from '../../_shared components/ResponsiveImage';
import backgroundImageLarge from '../../_images/landingpage-background-original.png';
import backgroundImageSmall from '../../_images/landingpage-background-xs.png';

class HomepageRoot extends Component {
    render() {
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
}
    
export default HomepageRoot;