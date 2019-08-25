import React, { Component } from 'react';
import backgroundUpperImage from '../../_images/landingpage-background-upper-xs.png';
import backgroundLowerImage from '../../_images/landingpage-background-lower-xs.png';
import FlyImage from '../../_shared components/FlyImage';

class HomepageXs extends Component {

    render() {
        return (
            <div className="homepage-homepagexs">
                <div className="container">
                    <div className="row">
                        <div className='col-12'>
                            <FlyImage src={backgroundUpperImage} fluid></FlyImage>
                        </div>
                        <div className='col-12'>
                            <FlyImage src={backgroundLowerImage} fluid></FlyImage>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
    
export default HomepageXs;