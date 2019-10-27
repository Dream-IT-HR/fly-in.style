import React from 'react';
import { Field } from 'formik';
import ValidationErrorMessage from '../ValidationErrorMessage/ValidationErrorMessage-component';
import TextBox from '../TextBox/TextBox-component';


const withFormikInput = FormikComponent => props =>
                             (<FormikComponent
                                 {...props}
                                 name="New Name" 
                              />);
                              
const FTextBoxFormikField = (props) => {
    let {errors, touched, name, translateLabel, label, placeholder, type} = props;
    
    let validationErrorHtml = undefined;
    
    if (touched[name] && errors[name]) {
        validationErrorHtml = <div><ValidationErrorMessage errorMessageType={errors[name]}/></div>;
    }        

    return (
        <div className="flytextbox-formikfield">
            <Field
                name={name}
                type={type}
                translateLabel={translateLabel}
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