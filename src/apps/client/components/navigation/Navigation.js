import React from 'react';
import { Link } from 'react-router-dom';

import Toggle from '../../../../_shared/components/Toggle/Toggle';

const Navigation = ({ closeNavigation, isNavigationVisible }) => {
    const handleSmsNotification = status => console.log(status);
    const handleTimeNotification = status => console.log(status);

    return (
        <div className={`${{isNavigationVisible} ? `navigation navigation--open` : `navigation`}`}>
            <div className="navigation__content">

                <Link to="/client">Link</Link>
                <Link to="/client">Link</Link>
                <Link to="/client">Link</Link>
                <Link to="/client">Link</Link>

                <div className="navigation__toggle-wrappers">
                    <span>Notification settings</span>
                    <Toggle text="Enable SMS notifications" action={(status) => handleSmsNotification(status)} />
                    <Toggle text="Notify me 30min before my turn" action={(status) => handleTimeNotification(status)} />
                </div>

            </div>
            <span className="navigation__close-action" onClick={closeNavigation}>
                X
            </span>
        </div>
    )
}

export default Navigation;