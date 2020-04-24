import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Toggle = React.memo(({ text, action }) => {
    const [toggleSwitch, setToggleSwitch] = useState(false);

    const handleToggleSwitch = () => {
        setToggleSwitch(!toggleSwitch);
        action(!toggleSwitch);
    };

    return (
        <div className="toggle">
            <div className="toggle__text">
                {text}
            </div>
            <div className="toggle__wrapper" onClick={handleToggleSwitch}>
                <div className={`toggle__switch toggle__switch--${toggleSwitch}`}></div>
            </div>
        </div>
    );
});

export default Toggle;

Toggle.propTypes = {
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
};
