// import HomepageXs from './HomepageScreen-xs';
// import HomepageLarge from './HomepageScreen-large';
// import { Media } from 'react-breakpoints';
import React, { Component } from 'react';
import ResponsiveImage from '../../_shared components/ResponsiveImage';
import backgroundImageLarge from '../../_images/landingpage-background-original.png';
import backgroundImageSmall from '../../_images/landingpage-background-xs.png';

class HomepageRoot extends Component {

    render() {
        return (
            
            <div className="homepage" >
                    <div className="homepage-background">
                    
                    <ResponsiveImage
                        desktopImage={backgroundImageLarge}
                        mobileImage={backgroundImageSmall}
                    ></ResponsiveImage>

                        {/* <Media>
                            {
                                ({ breakpoints, currentBreakpoint }) =>
                                    breakpoints[currentBreakpoint] > breakpoints.mobileLandscape ? (
                                        <HomepageLarge />
                                    ) : (
                                        <HomepageXs />
                                    )
                            }
                        </Media> */}
                    </div>    
            </div>
        );
    }
}
    
export default HomepageRoot;