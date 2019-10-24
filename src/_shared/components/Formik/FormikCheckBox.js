import React from 'react';
import ValidationErrorMessage from '../Formik/ValidationErrorMessage';
import CheckBox from '../CheckBox/CheckBox-component';

const FormikCheckBox = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
  }) => (
    <div className="formik">
        <CheckBox {...field} {...props}/>
        {touched[field.name] &&
        errors[field.name] && 
        //<div className="error">{errors[field.name]}</div>
        <div><ValidationErrorMessage errorMessageType={errors[field.name]}/></div>
        }
    </div>
  );

export default FormikCheckBox;
