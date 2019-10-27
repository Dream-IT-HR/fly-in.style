import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button, {ButtonVariants, ButtonSizes}  from '../../_shared/components/Button/Button-component';
import ValidationErrorMessage, {ValidationErrorMessageTypes} from '../../_shared/components/Formik/ValidationErrorMessage';
import useEffectAsync from '../../_shared/hooks/useEffectAsync';
import usersService from '../../services/usersService';
import TextBoxFormikField from '../../_shared/components/TextBoxFormikField/TextBoxFormikField-component';
import CheckBoxFormikField from '../../_shared/components/CheckBoxFormikField/CheckBoxFormikField-component';

const SignupSchema = Yup.object().shape({
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


const SignUp = () => {
    const containsErrors = (errors) => (Object.keys(errors) && Object.keys(errors).length > 0);
    const wasTouched = (touched) => (Object.keys(touched) && Object.keys(touched).length > 0);
    
    const [userData, setUserData] = useState(null);
    // const [ error, loading, data ] = useEffectAsync(usersService.RegisterAsync, userData, 0, true);
    const [,,] = useEffectAsync(usersService.RegisterAsync, userData, 0, true);
    
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
        <div className='container' display='flex'>
            <h1>Signup</h1>
                <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    isBusinessOwner: true
                }}
                validationSchema={SignupSchema}
                onSubmit={handleSubmitAsync}
                >
                {({ errors, touched, isSubmitting, values, status }) => {
                    let isDisabled = (!wasTouched(touched) || containsErrors(errors) || isSubmitting);

                    return (
                        <Form>
                            <Field name="email" type="email" />
                            <ErrorMessage name="email">
                            {
                                (errorMessage) => <div>
                                    {errors.email && touched.email ? (
                                        <div><ValidationErrorMessage errorMessageType={errorMessage}/></div>
                                    ) : null}
                                </div>
                            }
                            </ErrorMessage>

                            <Field name="firstName"/>
                            <ErrorMessage name="firstName">
                            {
                                (errorMessage) => <div>
                                    {errors.firstName && touched.firstName ? (
                                        <div><ValidationErrorMessage errorMessageType={errorMessage}/></div>
                                    ) : null}
                                </div>
                            }
                            </ErrorMessage>
                            
                            <Field name="lastName" />
                            <ErrorMessage name="lastName">
                            {
                                (errorMessage) => <div>
                                    {errors.lastName && touched.lastName ? (
                                        <div><ValidationErrorMessage errorMessageType={errorMessage}/></div>
                                    ) : null}
                                </div>
                            }
                            </ErrorMessage>

                            <CheckBoxFormikField touched={touched} errors={errors} name="isBusinessOwner" checked={values.isBusinessOwner} translateLabel="signUp.businessOwner"/>

                            <ErrorMessage name="isBusinessOwner">
                            {
                                (errorMessage) => <div>
                                    {errors.isBusinessOwner && touched.isBusinessOwner ? (
                                        <div><ValidationErrorMessage errorMessageType={errorMessage}/></div>
                                    ) : null}
                                </div>
                            }
                            </ErrorMessage>
                        
                            <Button variant={!isDisabled ? ButtonVariants.primary : ButtonVariants.disabled} size={ButtonSizes.small} disabled={isDisabled} type="submit">Submit</Button>
                        </Form>
                    )
                }
            }
            </Formik>
        </div>
    )
};

export default SignUp;

