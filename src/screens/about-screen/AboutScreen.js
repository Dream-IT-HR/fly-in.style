import React, {lazy} from 'react';
import ButtonVariants from '../../_shared components/Button/ButtonVariants';
import ButtonSizes from '../../_shared components/Button/ButtonSizes';

const Button = lazy(() => import('../../_shared components/Button/Button'));

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