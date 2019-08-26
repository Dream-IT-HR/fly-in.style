import React, { Component } from 'react';
import backgroundImage from '../../_images/landingpage-background-original.png';
import FlyImage from '../../_shared components/extended-components/FlyImage';

class HomepageLarge extends Component {

    render() {
        return (
            <div className="homepage-homepagexs">
                <div className="container">
                    <div className="row">
                        <div className='col-12'>
                            <FlyImage src={backgroundImage} fluid></FlyImage>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
    
export default HomepageLarge;