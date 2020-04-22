import React from 'react';

function HambiFunction({ onClick }) {
    return (
        <div className="nav-icon" onClick={onClick}>
            <span className="nav-icon__bar1"></span>
            <span className="nav-icon__bar2"></span>
            <span className="nav-icon__bar3"></span>
        </div>
    );
}

const Hambi = React.memo(HambiFunction);

export default Hambi;