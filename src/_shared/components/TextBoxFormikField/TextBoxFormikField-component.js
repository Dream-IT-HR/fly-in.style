import React from 'react';
import { Field } from 'formik';
import TextBox from '../TextBox/TextBox-component';
import FormikFieldValidation from '../FormikFieldValidation/FormikFieldValidation-component';

const TextBoxFormikField = (props) => {
    let {errors, touched, name, translatelabel, label, placeholder, type} = props;
    
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
            <FormikFieldValidation
                errors={errors}
                touched={touched}
                name={name}
            />
        </div>
    );
}

export default TextBoxFormikField;