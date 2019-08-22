import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Translate from 'react-translate-component';

class ErrorNotification extends Component {
    render() {
        return (
            <div className="error__notification">
                <p><Translate content={'error.errorNotifInaccessibleMessage'} /></p>
                <p><Translate content={'error.errorNotifCheckUrl'} /><Link to="/"><Translate content={'error.errorNotifHomeLink'} /></Link><Translate content={'error.errorNotifOr'} /><Link to="/"><Translate content={'error.errorNotifReportIssuse'} /></Link>.</p>
            </div>
        );
    }
}

export default ErrorNotification;