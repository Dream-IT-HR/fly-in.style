import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button, {ButtonVariants, ButtonSizes}  from '../../../_shared/components/Button/Button-component';

import {ValidationErrorMessageTypes} from '../../../_shared/components/Formik/ValidationErrorMessage';
import FormikTextBox from '../../../_shared/components/Formik/FormikTextBox';
import FormikCheckBox from '../../../_shared/components/Formik/FormikCheckBox';

const DataEntrySchema = Yup.object().shape({
    testName: Yup.string()
      .min(2, ValidationErrorMessageTypes.ToShort)
      .max(150, ValidationErrorMessageTypes.ToLong)
      .required(ValidationErrorMessageTypes.Required),
    lastName: Yup.string()
      .min(2, ValidationErrorMessageTypes.ToShort)
      .max(150, ValidationErrorMessageTypes.ToLong)
      .required(ValidationErrorMessageTypes.Required),
    firstName: Yup.string()
        .min(2, ValidationErrorMessageTypes.ToShort)
        .max(150, ValidationErrorMessageTypes.ToLong)
        .required(ValidationErrorMessageTypes.Required),
    email: Yup.string()
      .email(ValidationErrorMessageTypes.InvalidEmail)
      .required(ValidationErrorMessageTypes.Required),
  });


const DataEntry = () => {
    const containsErrors = (errors) => (Object.keys(errors) && Object.keys(errors).length > 0);
    const wasTouched = (touched) => (Object.keys(touched) && Object.keys(touched).length > 0);
    
    const [userData, setUserData] = useState(null);
    // const [ error, loading, data ] = useEffectAsync(usersService.RegisterAsync, userData, 0, true);
    // const [,,] = useEffectAsync(usersService.RegisterAsync, userData, 0, true);
    
    // TODO - while loading display global spinner
    const handleSubmitAsync = async (values, { setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
      
          alert(JSON.stringify(values, null, 2));
          setUserData(values);
                
          setSubmitting(false);
      
      }, 500);
    }
    
    return (
        <div className='flydemo flydemo-form flydemo-form-dataentry'>
        <div className='container' display='flex'>
            <h1>DataEntry</h1>
                <Formik
                initialValues={{
                    testName: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    isBusinessOwner: true
                }}
                validationSchema={DataEntrySchema}
                onSubmit={handleSubmitAsync}
                >
                {({ errors, touched, isSubmitting, status }) => {
                    let isDisabled = (!wasTouched(touched) || containsErrors(errors) || isSubmitting);

                    return (
                        <Form>
                            <Field name="email" type="email" placeholder="email" component={FormikTextBox} />
                            <Field name="testName" component={FormikTextBox} />
                            <Field name="firstName" component={FormikTextBox} />
                            <Field name="lastName" component={FormikTextBox} />
                            <Field name="isBusinessOwner" component={FormikCheckBox} label="čeks" translateLabel="demo.checkboxLabel" />
                         
                            <Button variant={!isDisabled ? ButtonVariants.primary : ButtonVariants.disabled} size={ButtonSizes.small} disabled={isDisabled} type="submit">Submit</Button>
                        </Form>
                    )
                }
            }
            </Formik>
        </div>
        </div>
    )
};

export default DataEntry;

