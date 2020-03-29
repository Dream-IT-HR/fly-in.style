import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = ({ closeNavigation, navigation }) => {
    return (
        <div className={`${{navigation} ? `navigation navigation--open` : `navigation`}`}>
            <div className="navigation__content">
                <Link to="/client">Link</Link>
                <Link to="/client">Link</Link>
                <Link to="/client">Link</Link>
                <Link to="/client">Link</Link>
            </div>
            <span className="navigation__close-action" onClick={closeNavigation}>
                X
            </span>
        </div>
    )
}

export default Navigation;