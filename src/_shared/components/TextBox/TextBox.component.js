import React from 'react';

const FTextBox = () => {
    return (
        <div className="flytextbox">
            <input type="text" />
        </div>
    );
}

const TextBox = React.memo(FTextBox);

export default TextBox;
