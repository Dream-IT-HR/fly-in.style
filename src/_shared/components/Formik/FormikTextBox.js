import React from 'react';
import ValidationErrorMessage from '../Formik/ValidationErrorMessage';
import TextBox from '../TextBox/TextBox-component';

const withFormikInput = FormikComponent => props =>
                             (<FormikComponent
                                 {...props}
                                 name="New Name" 
                              />);

const FormikTextBox = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
  }) => (
    <div className="formik">
        <TextBox {...field} {...props}/>
        {
          touched[field.name] &&
          errors[field.name] && 
          <div><ValidationErrorMessage errorMessageType={errors[field.name]}/></div>
        }
    </div>
  );

export default FormikTextBox;