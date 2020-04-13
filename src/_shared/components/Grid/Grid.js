import React from 'react';

const Grid = React.memo(({ children }) => {
    return (
        <div className="container">
            {children}
        </div>
    );
});

export default Grid;