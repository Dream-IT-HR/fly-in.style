import React, {Component} from 'react';
import Navigation from './Navigation';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Navigation/>
            </div>
            
        );
    }
}

export default Header;