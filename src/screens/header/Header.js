// import React, {lazy} from 'react';
import React from 'reactn';

// const Navigation = lazy(() => import('./Navigation'));
import Navigation from './Navigation';

function FHeader() {
    return (
        <div className="header">
            <Navigation/>
        </div>
        
    );
}

const Header = React.memo(FHeader);

export default Header;