import React from 'react';
import { Field } from 'formik';
import CheckBox from '../CheckBox/CheckBox-component';
import FormikFieldValidation from '../FormikFieldValidation/FormikFieldValidation-component';

const FCheckBoxFormikField = (props) => {
    let {errors, touched, name, checked, translatelabel, label} = props;
    
    checked = checked || false; // uncontrolled -> controlled component
    
    return (
        <div className="flycheckbox-formikfield">
            <Field
                name={name}
                type="checkbox"
                checked={checked}
                translatelabel={translatelabel}
                label={label}
                component={CheckBox}
            />
            <FormikFieldValidation
                errors={errors}
                touched={touched}
                name={name}
            />
        </div>
    );
}

const CheckBoxFormikField = React.memo(FCheckBoxFormikField);

export default CheckBoxFormikField;