import React, { Component } from 'react';
import ErrorNotification from './ErrorNotification';
import ErrorFooter from './ErrorFooter';
import Translate from 'react-translate-component';

// SVG's

import {ReactComponent as Image403} from '../../_images/403.svg';

class Error403 extends Component {
    render() {
        return (
            <div className="container">
                <div className="error">
                    <h1><Translate content={'error.error403'} /></h1>
                    <div className="error__img">
                        <Image403 alt="Error 403 image"/>
                    </div>
                    <ErrorNotification/>
                    <ErrorFooter/>
                </div>
            </div>
        );
    }
}

export default Error403;