import React, { Component } from 'react';
import logo from '../../_images/header-logo.png';
import { Link } from 'react-router-dom';

class ErrorFooter extends Component {
    render() {
        return (
            <div className="error__footer-wrapper">
                <div className="error__footer d-flex justify-content-between container-fluid">
                    <p className="copy">&copy; 2018 Vivad Inc. LLC</p>
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <Link to="/"><img src={logo} alt="Image of header logo"/></Link>
                    <nav>
                        <ul>
                            <li><Link to="/">Report Bugs</Link></li>
                            <li><Link to="/">Help</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default ErrorFooter;