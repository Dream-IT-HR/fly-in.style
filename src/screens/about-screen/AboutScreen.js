import React, { Component } from 'react';
import Button from '../../_shared components/Button/Button';
import ButtonVariants from '../../_shared components/Button/ButtonVariants';
import ButtonSizes from '../../_shared components/Button/ButtonSizes';

class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="error">
                    <h1>About us</h1>
                </div>
                <Button variant={ButtonVariants.primary} size={ButtonSizes.large}>GET STARTED</Button>
                <Button variant={ButtonVariants.secondary} size={ButtonSizes.small}>Click me secondary!</Button>
            </div>
        );
    }
}
    
export default About;