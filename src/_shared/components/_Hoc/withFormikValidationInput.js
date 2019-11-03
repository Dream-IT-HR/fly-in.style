import React from 'react';
import ValidationErrorMessage from '../ValidationErrorMessage/ValidationErrorMessage-component';

const withFormikValidationInput = FormikComponent => props => {
    let {errors, touched, name} = props;
    
    let validationErrorHtml = undefined;
    
    if (touched[name] && errors[name]) {
        validationErrorHtml = <div><ValidationErrorMessage errorMessageType={errors[name]}/></div>;
    }        

    return (
        <>
            <FormikComponent
                {...props}
            />
            {validationErrorHtml}
        </>
    );
}

export default withFormikValidationInput();