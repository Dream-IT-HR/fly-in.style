import React, {lazy} from 'react';

const Navigation = lazy(() => import('./Navigation'));

function fHeader() {
    return (
        <div className="header">
            <Navigation/>
        </div>
        
    );
}

const Header = React.memo(fHeader);

export default Header;