import React, {lazy} from 'react';
import ButtonVariants from '../../_shared components/Button/ButtonVariants';
import ButtonSizes from '../../_shared components/Button/ButtonSizes';
import {ReactComponent as WingsOfGlorySvg} from '../../_images/wingsofglory.svg';

const Button = lazy(() => import('../../_shared components/Button/Button'));
const Hambi = lazy(() => import('../header/Hambi'));

function fNavigation() {
        return (
            <nav className="header__nav">
                <div className="header__nav__nav-icon">
                    <Hambi></Hambi>
                </div>
                <div className="header__nav__brand">
                    <WingsOfGlorySvg className="wingsofglory" alt="logo"/>
                    <p>FlyinLine</p>
                </div>
                <div className="header__nav__callToActions">
                    <Button className="header__login" variant={ButtonVariants.secondary} size={ButtonSizes.small}>Login</Button>
                    <Button className="header__getstarted" variant={ButtonVariants.dark} size={ButtonSizes.small}>Get Started</Button>
                </div>
            </nav>
        );
}

const Navigation = React.memo(fNavigation);

export default Navigation;