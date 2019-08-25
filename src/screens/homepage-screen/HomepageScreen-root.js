import HomepageXs from './HomepageScreen-xs';
import HomepageLarge from './HomepageScreen-large';
import { Media } from 'react-breakpoints';
import React, { Component } from 'react';

class HomepageRoot extends Component {

    render() {
        return (
            <div className="homepage" >
                    <div className="homepage-background">
                        <Media>
                            {
                                ({ breakpoints, currentBreakpoint }) =>
                                    breakpoints[currentBreakpoint] > breakpoints.mobileLandscape ? (
                                        <HomepageLarge />
                                    ) : (
                                        <HomepageXs />
                                    )
                            }
                        </Media>
                    </div>    
                    <div>
                        {/* <div id="image2">
                            <img src="http://t1.gstatic.com/images?q=tbn:ANd9GcThtVuIQ7CBYssbdwtzZjVLI_uw09SeLmyrxaRQEngnQAked5ZB"/>
                        </div> */}
                        <div id="image2">
                            
                        </div>
                    <div id="image1"></div>
                </div>
                
            </div>
        );
    }
}
    
export default HomepageRoot;