import React from 'react';
import PropTypes from 'prop-types';
import Translate from 'react-translate-component';

const ValidationErrorMessage = (props) => 
{
    let translateContent = undefined;

    switch (props.errorMessageType) {
        case ValidationErrorMessageTypes.Required:
            translateContent = 'validation.required';
            break;
        case ValidationErrorMessageTypes.ToLong:
            translateContent = 'validation.toLong';
            break;
        case ValidationErrorMessageTypes.ToShort:
            translateContent = 'validation.toShort';
            break;
        case ValidationErrorMessageTypes.InvalidEmail:
            translateContent = 'validation.invalidEmail';
            break;
        default:
            translateContent = 'validation.something';
            break;
    }

    return (
        <div className='validationerror'>
            <Translate content={translateContent}/>
        </div>
    )
};

export const ValidationErrorMessageTypes = 
{
    ToShort : 'ToShort',
    ToLong : 'ToLong',
    Required : 'Required',
    InvalidEmail : 'InvalidEmail'
};

export default ValidationErrorMessage;

ValidationErrorMessage.propTypes = {
    errorMessageType: PropTypes.string
};