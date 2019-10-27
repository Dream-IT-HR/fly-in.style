import PropTypes from 'prop-types';
import React from 'react';
import Translate from 'react-translate-component';

// translateLabel, label - iskoristiti za placeholder koji odleti gore lijevo 

const TextBox = ({field, form, ...props}) => {
    let {type, translateLabel, label, placeholder} = props;
    let {isValid} = form;
    
    if (type === undefined) {
        type = InputTypes.text;
    }

    let className = "flytextbox";

    if (isValid) {
        className += " flytextbox__formvalid"
    }

    return (
        <div className={className}>
            <Translate content={translateLabel}/>
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