import React from 'react';
import { Field } from 'formik';
import ValidationErrorMessage from '../Formik/ValidationErrorMessage';
import TextBox from '../TextBox/TextBox-component';

const FTextBoxFormikField = (props) => {
    let {errors, touched, name, translateLabel, label, placeholder, type} = props;
    
    let validationErrorHtml = undefined;
    
    if (touched[name] && errors[name]) {
        validationErrorHtml = <div><ValidationErrorMessage errorMessageType={errors[name]}/></div>;
    }        

    return (
        <div className="flyTextbox-formikfield">
            <Field
                name={name}
                type={type}
                translatelabel={translateLabel}
                label={label}
                placeholder={placeholder}
                component={TextBox}
            />
            {validationErrorHtml}          
        </div>
    );
}

const TextBoxFormikField = React.memo(FTextBoxFormikField);

export default TextBoxFormikField;