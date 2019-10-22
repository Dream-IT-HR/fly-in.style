import React from 'react';
import { Field } from 'formik';
import ValidationErrorMessage from '../Formik/ValidationErrorMessage';
import CheckBox from '../CheckBox/CheckBox-component';

const FCheckBoxFormikField = (props) => {
    let {errors, touched, name, checked, translateLabel, label} = props;
    
    checked = checked || false; // uncontrolled -> controlled component
    
    let validationErrorHtml = undefined;
    
    if (touched[name] && errors[name]) {
        validationErrorHtml = <div><ValidationErrorMessage errorMessageType={errors[name]}/></div>;
    }        

    return (
        <div className="flycheckbox-formikfield">
            <Field
                name={name}
                type="checkbox"
                checked={checked}
                translateLabel={translateLabel}
                label={label}
                component={CheckBox}
            />
            {validationErrorHtml}          
        </div>
    );
}

const CheckBoxFormikField = React.memo(FCheckBoxFormikField);

export default CheckBoxFormikField;