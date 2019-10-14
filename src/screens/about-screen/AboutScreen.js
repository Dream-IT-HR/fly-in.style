import React, {lazy} from 'react';
import {ButtonVariants, ButtonSizes} from '../../_shared/components/Button/Button-component';

const Button = lazy(() => import('../../_shared/components/Button/Button-component'));

function fAbout() {    
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
const About = React.memo(fAbout);

export default About;