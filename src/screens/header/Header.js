import React, {Component} from 'react';
import Greeter from './Greeter';

class Header extends Component {
    render() {
        // return <Greeter with={{ name: "Martin" }} />
        return <Greeter />
    }
}

export default Header;