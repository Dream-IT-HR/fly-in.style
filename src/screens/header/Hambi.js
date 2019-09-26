import React from 'react';

function HambiFunction() {
    // const[responsiveMenuIsOpen, setResponsiveMenuIsOpen] = useState(false);

    return (
        <div className="nav-icon">
             {/* className={"animated slideInDown" + (responsiveMenuIsOpen ? " is-active" : "")} onClick={setResponsiveMenuIsOpen(!responsiveMenuIsOpen)}> */}
            <span className="nav-icon__bar1"></span>
            <span className="nav-icon__bar2"></span>
            <span className="nav-icon__bar3"></span>
        </div>
    );
}

const Hambi = React.memo(HambiFunction);

export default Hambi;