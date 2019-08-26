import React, {Component} from 'react';
import Button from '../../_shared components/Button/Button';
import ButtonVariants from '../../_shared components/Button/ButtonVariants';
import ButtonSizes from '../../_shared components/Button/ButtonSizes';

class Navigation extends Component {
    render() {
        return (
            <nav>
                <Button className="header__login" variant={ButtonVariants.secondary} size={ButtonSizes.small}>Login</Button>
            </nav>
        );
    }
}

export default Navigation;