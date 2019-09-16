import React, {lazy} from 'react';
import ButtonVariants from '../../_shared components/Button/ButtonVariants';
import ButtonSizes from '../../_shared components/Button/ButtonSizes';
import {ReactComponent as WingsOfGlorySvg} from '../../_images/wingsofglory.svg';
import {Link} from 'react-router-dom';

const Button = lazy(() => import('../../_shared components/Button/Button'));
const Hambi = lazy(() => import('../header/Hambi'));

const onLogin = () =>
{
    window.location = '/login';
}

function fNavigation() {
        return (
            <nav className="header__nav clearfix">
                <div className="header__nav__nav-icon">
                    <Hambi></Hambi>
                </div>
                <div className="header__nav__brand">
                    <WingsOfGlorySvg className="wingsofglory" alt="logo"/>
                    <p>FlyinLine</p>
                </div>
                <div className="header__nav__callToActions">
                    <Link className="header__nav__callToActions__login flybutton flybutton__size--small flybutton__variant--secondary" to='/login'>Login</Link>
                    <Button className="header__nav__callToActions__login" variant={ButtonVariants.secondary} size={ButtonSizes.small} onClick={onLogin}>Login</Button>
                    <Button className="header__nav__callToActions__getstarted" variant={ButtonVariants.dark} size={ButtonSizes.small}>Get Started</Button>
                </div>
            </nav>
        );
}

const Navigation = React.memo(fNavigation);

export default Navigation;