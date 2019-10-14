import Translate from 'react-translate-component';
import React, {lazy} from 'react';
import {ButtonVariants, ButtonSizes} from '../../_shared/components/Button/Button';
import {ReactComponent as WingsOfGlorySvg} from '../../_images/wingsofglory.svg';
import Greeter from './Greeter';

const Button = lazy(() => import('../../_shared/components/Button/Button'));
const Hambi = lazy(() => import('../header/Hambi'));

function fNavigation() {
        return (
            <nav className="header__nav clearfix">
                <div className="header__nav__nav-icon">
                    <Hambi></Hambi>
                </div>
                <div className="header__nav__brand">
                    <WingsOfGlorySvg className="wingsofglory" alt="logo"/>
                    <p>
                        <Translate content="global.productName" />
                    </p>
                </div>
                <div className="header__nav__callToActions">
                    <Greeter/>
                    <Button className="header__nav__callToActions__login" variant={ButtonVariants.secondary} size={ButtonSizes.small} linkPath='/login'>Login</Button>
                    <Button className="header__nav__callToActions__getstarted" variant={ButtonVariants.dark} size={ButtonSizes.small}>Get Started</Button>
                </div>
            </nav>
        );
}

const Navigation = React.memo(fNavigation);

export default Navigation;