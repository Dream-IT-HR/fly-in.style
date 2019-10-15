import React from 'react';
import { Formik, Field } from 'formik';
import TextBox from '../TextBox/TextBox.component';

const FormikTextBox = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
  }) => (
    <div>
        <TextBox {...field} {...props}/>
      {/* <input type="text" {...field} {...props} /> */}
      {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>}
    </div>
  );

export default FormikTextBox;