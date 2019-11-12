import React from 'react';
import ValidationErrorMessage from '../ValidationErrorMessage/ValidationErrorMessage-component';
     
const FormikFieldValidation = (props) => {
    let {errors, touched, name} = props;

    let validationErrorHtml = undefined;
    
    if (touched[name] && errors[name]) {
        validationErrorHtml = <div><ValidationErrorMessage errorMessageType={errors[name]}/></div>;
    }        

    return (
        <>
            {validationErrorHtml}
        </>
    );
}

export default FormikFieldValidation;