import PropTypes from 'prop-types';
import React from 'react';

// translateLabel, label - iskoristiti za placeholder koji odleti gore lijevo * ana

const TextBox = (props, field) => {
    let {type} = props;
    
    if (type === undefined) {
        type = InputTypes.text;
    }

    return (
        <div className="flytextbox">
            {/* {translatelabel} {label} */}
            <input type={type} {...props} {...field}/>
        </div>
    );
}

export const InputTypes = {
    text: 'text',
    email: 'email'
};

export default TextBox;

TextBox.propTypes = {
    type: PropTypes.oneOf(Object.keys(InputTypes))
};