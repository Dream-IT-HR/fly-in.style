import PropTypes from 'prop-types';
import React from 'react';

const FTextBox = (props, field) => {
    let {type} = props;
    
    if (type === undefined) {
        type = 'text';
    }

    return (
        <div className="flytextbox">
            <input type={type} {...props} {...field}/>
        </div>
    );
}

const TextBox = React.memo(FTextBox);

export const InputTypes = {
    text: 'text',
    email: 'email'
};

export default TextBox;

TextBox.propTypes = {
    type: PropTypes.oneOf(Object.keys(InputTypes))
};