import React from 'react';
import PropTypes from 'prop-types';
import Translate from 'react-translate-component';

const ValidationErrorMessage = (props) => 
{
    let translatedMessage = null;

    switch (props.errorMessageType) {
        case ValidationErrorMessageTypes.Required:
            translatedMessage = (<Translate content='validation.required'/>);
            break;
        case ValidationErrorMessageTypes.ToLong:
            translatedMessage = (<Translate content='validation.toLong'/>);
            break;
        case ValidationErrorMessageTypes.ToShort:
            translatedMessage = (<Translate content='validation.toShort'/>);
            break;
        case ValidationErrorMessageTypes.InvalidEmail:
            translatedMessage = (<Translate content='validation.invalidEmail'/>);
            break;
        default:
            translatedMessage = (<Translate content='validation.something'/>);
            break;
    }
    return (
        <div className='ValidationError'>{translatedMessage}</div>
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