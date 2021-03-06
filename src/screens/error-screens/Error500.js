import React, { Component } from 'react';
import ErrorNotification from './ErrorNotification';
import ErrorFooter from "./ErrorFooter";
import Translate from 'react-translate-component';

// SVG's
import {ReactComponent as Image500} from '../../_images/500.svg';

class Error500 extends Component {
    render() {
        return (
            <div className="container">
                <div className="error">
                    <h1><Translate content={'error.error500'} /></h1>
                    <div className="error__img">
                        <Image500 alt="Error 500 image"/>
                    </div>
                    <ErrorNotification/>
                    <ErrorFooter/>
                </div>
            </div>
        );
    }
}

export default Error500;