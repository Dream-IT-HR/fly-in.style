import React from 'react';
import { Field } from 'formik';
import ValidationErrorMessage from '../ValidationErrorMessage/ValidationErrorMessage-component';
import TextBox from '../TextBox/TextBox-component';
//import withFormikValidationInput from '../_Hoc/withFormikValidationInput';

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
      
                              
const FTextBoxFormikField = (props) => {
    let {name, translatelabel, label, placeholder, type} = props;
    
    return (
        <div className="flytextbox-formikfield">
            <Field
                name={name}
                type={type}
                translatelabel={translatelabel}
                label={label}
                placeholder={placeholder}
                component={TextBox}
            />
        </div>
    );
}

const TextBoxFormikField = React.memo(withFormikValidationInput(FTextBoxFormikField));

export default TextBoxFormikField;