import React, {lazy} from 'react';

// const Navigation = lazy(() => import('./Navigation'));
import Navigation from './Navigation';

function fHeader() {
    return (
        <div className="header">
            <Navigation/>
        </div>
        
    );
}

const Header = React.memo(fHeader);

export default Header;