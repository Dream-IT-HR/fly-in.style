import React, {Component} from 'react';
import Button from '../../_shared components/Button/Button';
import ButtonVariants from '../../_shared components/Button/ButtonVariants';
import ButtonSizes from '../../_shared components/Button/ButtonSizes';

class Navigation extends Component {
    render() {
        return (
            <nav className="header__nav">
                <div className="header__nav__callToActions">
                    <Button className="header__getstarted" variant={ButtonVariants.dark} size={ButtonSizes.small}>Get Started</Button>
                    <Button className="header__login" variant={ButtonVariants.secondary} size={ButtonSizes.small}>Login</Button>
                </div>
            </nav>
        );
    }
}

export default Navigation;