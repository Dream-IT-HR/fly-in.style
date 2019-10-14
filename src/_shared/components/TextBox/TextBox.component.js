import React from 'react';

const FTextBox = (props) => {
    return (
        <div>
            <input type="text" />
        </div>
    );
}

const TextBox = React.memo(FTextBox);

export default TextBox;
