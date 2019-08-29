import React, { useState } from 'react';

function HambiFunction() {
    // const[responsiveMenuIsOpen, setResponsiveMenuIsOpen] = useState(false);

    return (
        <div id="nav-icon">
             {/* className={"animated slideInDown" + (responsiveMenuIsOpen ? " is-active" : "")} onClick={setResponsiveMenuIsOpen(!responsiveMenuIsOpen)}> */}
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

const Hambi = React.memo(HambiFunction);

export default Hambi;